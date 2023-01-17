import { FC } from 'react';

import styles from '../styles/Footer.module.scss';

type footerProps = {
    copyright: string
}

const Footer:FC<footerProps> = ({copyright}: footerProps) => {

    return (
        <footer className={styles.footer + " font-small mt-0"}>
    	    <div className={styles.copyright + " text-center py-3"}>
                <span>{copyright}</span>
            </div>
        </footer>
    )
}

export default Footer;
