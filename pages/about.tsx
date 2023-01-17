import axios from "axios";
import {Breadcrumb} from "react-bootstrap";
import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.scss";
import CatalogGallery from "../components/catalog-gallery/CatalogGallery";
import {NextPage} from "next";
import Head from "next/head";

interface aboutProps {
    categories: {id: number, alias: string, title: string, description: string, image: string}[],
}

const About: NextPage<aboutProps> = ({categories}) => {
    return <>
        <Head>
            <title>Applecart eshop | About us</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        </Head>
        <section className={"section--page"}>
            <div className="page--container container">
                <Breadcrumb className={"custom-breadcrumb"}>
                    <Breadcrumb.Item><Link href={`/`}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>About us</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.about}>
                    <h2 className={styles.page_title + " mb-5"}>About us</h2>
                    <hr className="my-4"/>
                    <img className="w-75 pb-3" src={"/images/about_page.jpg"} alt="Shop photo" />
                    <div className={styles.content}>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto a alias recusandae aliquam
                            eaque maiores dolores ducimus ea qui corrupti sint nemo necessitatibus sequi, culpa quasi
                            aspernatur atque nihil quod.Cupiditate beatae quae nostrum vero culpa iure ex fugiat,
                            asperiores, laborum veniam neque, ratione ipsum. Reprehenderit aliquam nobis sit dicta natus
                            modi repudiandae quia. Exercitationem placeat officiis provident error qui?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto a alias recusandae aliquam
                            eaque maiores dolores ducimus ea qui corrupti sint nemo necessitatibus sequi, culpa quasi
                            aspernatur atque nihil quod.Cupiditate beatae quae nostrum vero culpa iure ex fugiat,
                            asperiores, laborum veniam neque, ratione ipsum. Reprehenderit aliquam nobis sit dicta natus
                            modi repudiandae quia. Exercitationem placeat officiis provident error qui?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto a alias recusandae aliquam
                            eaque maiores dolores ducimus ea qui corrupti sint nemo necessitatibus sequi, culpa quasi
                            aspernatur atque nihil quod.Cupiditate beatae quae nostrum vero culpa iure ex fugiat,
                            asperiores, laborum veniam neque, ratione ipsum. Reprehenderit aliquam nobis sit dicta natus
                            modi repudiandae quia. Exercitationem placeat officiis provident error qui?
                        </p>
                    </div>
                    <h2 className={"mb-5"}>Start shopping</h2>
                    <CatalogGallery categories={categories} />
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

export default About;
