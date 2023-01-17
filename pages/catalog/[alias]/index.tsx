import {useRouter} from "next/router";
import axios from "axios";
import {NextPage} from "next";
import Link from "next/link";
import {Breadcrumb, Row, Col, Button, Pagination, Form, Accordion} from "react-bootstrap";
import styles from "../../../styles/CatalogIndex.module.scss";
import ProductCard from "../../../components/product-card/ProductCard";
import {useAppDispatch} from "../../../redux/hooks";
import {UISlice} from "../../../redux/ui/uiSlice";
import React, {useState, useRef} from "react";
import Head from "next/head";

interface Props {
    categories: {id: number, image: string, alias: string, title: string, description: string}[],
    products: {id: number, alias: string, categoryAlias: string, title: string, productMedia: string[], price: string, old_price: string}[],
    productsCount: number,
    params: {title: string, values: string[], unit: string}[]
}

const Catalog: NextPage<Props> = ({categories, products, productsCount, params}) => {
    const router = useRouter();
    const checkboxRef = useRef([]);


    const [filters, setFilters] = useState([]);

    const dispatch = useAppDispatch();

    const handlePaginationClick: (number: number) => void = (number) => {
        router.push(window.location.pathname + `?page=${number}`);
    }

    const handleCartToggle: () => void = () => {
        dispatch(UISlice.actions.toggleCartShown());
    }

    const handleCheckboxChange: (e) => void = (e) => {
        let currentFilter = filters.findIndex(element => element.name === e.target.name);

        if(e.target.checked) {
            if (currentFilter != -1) {
                filters[currentFilter].values.push(e.target.value);
            } else {
               filters.push({name: e.target.name, values: [e.target.value]});
            }
        } else {
            filters[currentFilter].values = filters[currentFilter].values.filter(value => value !== e.target.value);
        }
    }

    const handleFiltersApply: () => void = () => {
        let queryStr = '?';

        filters.forEach(el => {
            if(el.values) {
                queryStr += el.name + '=';

                let filterValues = [];

                el.values.forEach(value => {
                    filterValues.push(`'${value}'`);
                })

                if(filterValues) queryStr += filterValues + '&';
            }
        })

        queryStr = queryStr.slice(0,-1);
        router.push(window.location.pathname + queryStr);
    }

    const handleFiltersReset: () => void = () => {
        setFilters([]);

        for(let i in checkboxRef.current) {
            checkboxRef.current[i].checked = false;
        }

        router.push(window.location.pathname);
    }

    const alias = window.location.pathname.split('/').pop();

    const activeCategory = categories.find(el => el.alias === alias);

    let activePage = router.query.page ? + router.query.page : 1;
    let totalPages = Math.ceil(productsCount / 6);

    let paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === +activePage} onClick={() => handlePaginationClick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return <>
        <Head>
            <title>Applecart eshop | Catalog ({activeCategory.title})</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        </Head>
        <section className={"section--page"}>
            <div className="container">
                <Breadcrumb className={"custom-breadcrumb"}>
                    <Breadcrumb.Item><Link href={`/`}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Catalog ({activeCategory.title})</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <div className={styles.category_filter + ' my-4 text-center'}>
                            <Form>
                                {window.location.search && <Button variant="outline-success" className="my-4" onClick={handleFiltersReset}>
                                    Reset all
                                </Button>}
                                <Accordion>
                                    {params.map((param, index) => (
                                        <Accordion.Item eventKey={index.toString()}>
                                            <Accordion.Header>{param.title}{param.unit ? ', ' + param.unit : '' }</Accordion.Header>
                                            <Accordion.Body className="text-start">
                                                <Form.Group controlId="formBasicCheckbox">
                                                    {param.values.map((value, paramIndex) => (
                                                        <Form.Check ref={(element) => { checkboxRef.current[index + '-' + paramIndex] = element }} name={param.title.toLowerCase()} type="checkbox" label={value} value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)} />
                                                    ))}
                                                </Form.Group>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                                <Button variant="success" className="my-4" onClick={handleFiltersApply}>
                                    Apply
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="positions-list my-4">
                            <h5 className={styles.category_count}>Items in category — {productsCount}</h5>
                            <Row>
                                {products.map(product => (
                                    <Col lg={4} sm={6} className={"my-3"}>
                                        <ProductCard handleCartToggle={handleCartToggle} product={product} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        {totalPages > 1 && <Pagination>
                            {activePage !== 1 &&
                                <>
                                    <Pagination.First onClick={() => handlePaginationClick(1)} />
                                    <Pagination.Prev onClick={() => handlePaginationClick(activePage - 1)} />
                                </>
                            }
                            {paginationItems}
                            {activePage !== totalPages &&
                                <>
                                    <Pagination.Next onClick={() => handlePaginationClick(activePage + 1)} />
                                    <Pagination.Last onClick={() => handlePaginationClick(totalPages)} />
                                </>
                            }
                        </Pagination>}
                    </Col>
                </Row>
            </div>
        </section>
    </>
}

export async function getServerSideProps({query}) {
    const alias  = query.alias;
    const page = query.page ?? 1;
    let queryString = `${alias}?page=${page}`;

    Object.keys(query).forEach(key => {
        if(key !== 'alias' && key !== 'page') queryString += `&${key}=${query[key]}`;
    })

    return  axios.get(process.env.NEXT_PUBLIC_API_ROOT + '/catalog/' + queryString)
        .then((res) => {
            const categories = res.data.data.categories;
            const products = res.data.data.products;
            const params = res.data.data.params;
            const productsCount = res.data.data.productsCount;

            return {
                props: {
                    categories,
                    products,
                    productsCount,
                    params
                },
            }
        })
        .catch((error) => {
            if(error.response.status === 404) {
                return {
                    notFound: true,
                }
            }
        });
}

export default Catalog;