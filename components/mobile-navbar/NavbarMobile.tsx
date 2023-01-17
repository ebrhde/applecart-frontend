import React, {FC} from "react";
import styles from '../../styles/NavbarMobile.module.scss';
import {Button, Form, InputGroup, Nav} from "react-bootstrap";
import Link from "next/link";

type navbarProps = {
    categories: {id: number, image: string, alias: string, title: string, description: string}[],
}

const NavbarMobile: FC<navbarProps> = (props: navbarProps) => {
    const handleBurgerClick: () => void = () => {
        const navbar = document.querySelector(`.${styles.navbar_mobile}`);
        const body = document.querySelector('body');
        body.classList.toggle('no-overflow');
        navbar.classList.toggle(styles.opened);
    }

    const handleLinkClick: () => void = () => {
        const navbar = document.querySelector(`.${styles.navbar_mobile}`);
        const body = document.querySelector('body');
        body.classList.toggle('no-overflow');
        navbar.classList.toggle(styles.opened);
    }

    return (
        <div className={styles.navbar_mobile}>
            <div className={styles.navbar_mobile_menu}>
                <Form className={styles.search_form + ' d-sm-block d-md-none'}>
                    <InputGroup>
                        <Form.Control type="text" placeholder="e.g. IPhone" />
                        <Button className={styles.search_button} type="submit">
                            <img className={styles.search_icon} alt="Search" src="/icons/search.svg" />
                        </Button>
                    </InputGroup>
                </Form>
                <h5>Каталог:</h5>
                <ul onClick={handleLinkClick}>
                    {props.categories.map(category => (
                        <Link href={`/catalog/${category.alias}`}>
                            <li key={category.id} className={styles.category_mobile}>
                                <img src={category.image} />
                                <span className={styles.category_name}>{category.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className={styles.pages_links} onClick={handleLinkClick}>
                    <Link href="/about" passHref>
                        About us
                    </Link>
                    <Link href="/#contacts">Contacts</Link>
                </div>
            </div>
            <div className={styles.navbar_mobile_icon} onClick={handleBurgerClick}>
                <svg fill="#fff" viewBox="0 0 100 80">
                    <rect width="55" height="10"></rect>
                    <rect y="20" width="55" height="10"></rect>
                    <rect y="40" width="55" height="10"></rect>
                </svg>
            </div>
        </div>
    );
}

export default NavbarMobile;







// <div className="navbar--mobile">
//     <div className="navbar--mobile_menu">
//         <form action=" <?= \yii\helpers\Url::to(['category/search']) ?>" method="get"
//               className="search_form d-sm-block d-md-none">
//             <div className="input-group">
//                 <input type="text" name="q" className="form-control" placeholder="Что вы хотите найти?"
//                        aria-label="Search item" aria-describedby="basic-addon2">
//                     <div className="input-group-append">
//                         <button className="btn search-button" type="submit">
//                             <?= \yii\helpers\Html::img("@web/images/icons/search.svg", ['alt' => 'Поиск']) ?>
//                         </button>
//                     </div>
//             </div>
//         </form>
//         <h5>Каталог:</h5>
//         <?= \app\components\MenuWidget::widget([
//         ]) ?>
//         <div>
//             <a href="<?= \yii\helpers\Url::to(['/about']) ?>">О магазине</a>
//             <a href="<?= \yii\helpers\Url::to(['/#contacts']) ?>">Контакты</a>
//         </div>
//     </div>
//     <div className="navbar--mobile_icon">
//         <svg fill="#fff" viewBox="0 0 100 80">
//             <rect width="55" height="10"></rect>
//             <rect y="20" width="55" height="10"></rect>
//             <rect y="40" width="55" height="10"></rect>
//         </svg>
//     </div>
// </div>