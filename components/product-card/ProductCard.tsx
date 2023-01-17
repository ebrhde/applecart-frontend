import styles from "../../styles/ProductCard.module.scss";
import {Button, Card} from "react-bootstrap";
import Link from "next/link";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addToCart, cartSlice} from "../../redux/cart/cartSlice";
import integerDivide from "../../utils/integerDivide";

type productCardProps = {
    handleCartToggle: () => void,
    product: {
        id: number, categoryAlias: string, alias: string, title: string, productMedia: string[], price: string, old_price: string},
}

const ProductCard:FC<productCardProps>  = ({product, handleCartToggle}:productCardProps) => {
    const userId = useAppSelector((state) => state.user.id);
    const dispatch = useAppDispatch();

    return <Card className={styles.card}>
        <Card.Body className="text-center">
            <Card.Title>
                <Link href={`/catalog/${product.categoryAlias}/${product.alias}`}>
                    <Card.Link href={''}>
                        {product.title}
                    </Card.Link>
                </Link>
            </Card.Title>
            <Card.Link href={`/catalog/${product.categoryAlias}/${product.alias}`}>
                <Card.Img variant="top" src={product.productMedia[0]} className={styles.card__image}
                          alt={product.title}/>
            </Card.Link>
            <div className={styles.card__price + " my-2"}>
                <h5 className={product.old_price ? styles.hot_price : ''}>
                    {integerDivide(product.price)}$
                </h5>
                {product.old_price &&
                    <span>{integerDivide(product.old_price)}$</span>
                }
            </div>
            <Button variant={"success"} onClick={() => {
                    if(userId) dispatch(addToCart({...product, quantity: 1}))
                    else dispatch(cartSlice.actions.addItem({...product, quantity: 1}));
                    handleCartToggle();
                }
            }>
                Add to cart
            </Button>
        </Card.Body>
    </Card>
}

export default ProductCard;