import {FC, useState} from "react";
import Link from "next/link";
import styles from '../../styles/Catalog.module.scss';


type catalogProps = {
    categories: {id: number, alias: string, title: string, description: string}[],
}

const Catalog:FC<catalogProps> = (props: catalogProps) => {


    return(
        <div className={styles.categories}>
            <span className={styles.catalogue}>Catalog:</span>
            <ul>
                {props.categories.map(category => (
                    <li key={category.id} className={styles.category}>
                        <Link href={`/catalog/${category.alias}`}>{category.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog;