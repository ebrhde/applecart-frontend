import axios from "axios";
import {Breadcrumb, Table, Col, Row} from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/OrderIndex.module.scss';
import React from "react";
import {NextPage} from "next";
import {refreshAccessToken} from "../../redux/auth/authSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import store from "../../redux/store";
import integerDivide from "../../utils/integerDivide";
import {cancelOrder} from "../../redux/order/orderSlice";

interface ordersProps {
    categories: {id: number, alias: string, title: string, description: string}[],
}

const Orders: NextPage<ordersProps> = ({categories}) => {
    const ordersQuantity = useAppSelector((state) => state.order.ordersQuantity);
    const orders = useAppSelector((state) => state.order.orders);
    const dispatch = useAppDispatch();

    const handleCancelOrder: (orderId: number) => void = (orderId) => {
        dispatch(cancelOrder(orderId));
    }

    return <>
        <Head>
            <title>Applecart eshop | Orders</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        </Head>
        <section className={"section--page"}>
            <div className="container">
                <Breadcrumb className={"custom-breadcrumb"}>
                    <Breadcrumb.Item><Link href={`/`}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Orders</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.orders_block}>
                    <h2 className={styles.page_title + " mb-5"}>Orders</h2>
                    {orders.length ?
                        <>
                            <h5 className="mb-4">You have — {ordersQuantity} orders</h5>
                            <div className={styles.orders__table}>
                                <Table className="table-bordered text-center">
                                    <thead className={styles.thead__dark}>
                                    <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Order date</th>
                                        <th scope="col">Items Quantity</th>
                                        <th scope="col">Sum</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orders.map((el, index) => (
                                        <tr>
                                            <th scope="row" className={styles.orders__tableCell}>
                                                <Link href={`/orders/${el.id}`}>
                                                    <a>{el.id}</a>
                                                </Link>
                                            </th>
                                            <td className={styles.orders__tableCell}>{el.created}</td>
                                            <td className={styles.orders__tableCell}>{el.quantity}</td>
                                            <td className={styles.orders__tableCell}>{integerDivide(el.sum)}$</td>
                                            <td className={el.status === 'Accepted' ?
                                                styles.orders__tableCellGreen : styles.orders__tableCellRed}>
                                                {el.status}
                                            </td>
                                            <td className={styles.orders__tableCell}>
                                                {el.status === 'Accepted' &&
                                                    <a onClick={() => handleCancelOrder(el.id)}
                                                       href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className={styles.orders_mobile}>
                                {orders.map((el, index) => (
                                    <div className={styles.orders_mobile_order}>
                                        <p className={styles.orders_mobile_order_link}>
                                            <Link href={`/orders/${el.id}`}>
                                                <a>{el.id}</a>
                                            </Link>
                                        </p>
                                        <p className={styles.orders_mobile_order_date}>
                                            Created {el.created}
                                        </p>
                                        <Row className={styles.orders_mobile_order_details}>
                                            <Col xs={4}>
                                                <h5>{integerDivide(el.sum)}$</h5>
                                            </Col>
                                            <Col xs={6}>
                                                <p
                                                    className={el.status === 'Accepted' ? 'alert alert-success' : 'alert alert-danger'}
                                                >
                                                    {el.status}
                                                </p>
                                            </Col>
                                            <Col xs={2}>
                                                {el.status === 'Accepted' &&
                                                    <a onClick={() => handleCancelOrder(el.id)}
                                                       href="#" className={styles.orders_mobile_order_remove + " btn btn-light"}>
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </a>
                                                }
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        <h5 className="mb-4">You have no orders</h5>
                    }
                </div>
            </div>
        </section>
    </>
}

export async function getServerSideProps() {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_ROOT + "/site/index");
    const categories = response.data.data.categories;

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            categories,
        },
    }
}

export default Orders