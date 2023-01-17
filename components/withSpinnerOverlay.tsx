import { FC } from 'react';
import {Spinner} from "react-bootstrap";

import styles from '../styles/withSpinnerOverlay.module.scss';

const WithSpinnerOverlay:FC = () => {

    return (
        <div className={styles.overlay}>
            <Spinner animation="border" variant="success" />
        </div>
    )
}

export default WithSpinnerOverlay;