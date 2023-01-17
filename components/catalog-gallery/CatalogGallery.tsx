import React, {FC, useState} from "react";
import Link from "next/link";
import styles from '../../styles/CatalogGallery.module.scss';
import {Card, Col, Row} from "react-bootstrap";


type catalogProps = {
    categories: {id: number, alias: string, title: string, image: string}[],
}

const Catalog:FC<catalogProps> = (props: catalogProps) => {
    return(
        <Row>
            {props.categories.map(el => (
                <Col md={3}>
                    <Card className={styles.cat_card}>
                        <div className={styles.cat_card_overlay}>
                            <p>
                                <Link href={`/catalog/${el.alias}`}>{el.title}</Link>
                            </p>
                        </div>
                        <img className={styles.cat_img} src={el.image} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Catalog;