import {Modal, Button, ListGroup, Table} from "react-bootstrap";
import React, { FC } from 'react';
import integerDivide from "../../utils/integerDivide";
import styles from "../../styles/CartModal.module.scss";
import Link from "next/link";


type cartModalProps = {
    cartData: {
        isShown: boolean
        items: any,
        totalCount: number,
        totalPrice: number
    }
    handleToggle: ()=>void,
    handleItemRemove: (object)=>void,
}

const CartModal:FC<cartModalProps> = (props:cartModalProps) => {
    return (
        <Modal size='lg' show={props.cartData.isShown} onHide={props.handleToggle}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.cartData.items.length > 0 &&
                    <Table hover striped responsive id="cart_table">
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody style={{borderTop: "unset"}}>
                        {props.cartData.items.map(el => (
                            <tr className={styles.cart_item}>
                                <td className={styles.cart_item_cell}>
                                    <img src={el.productMedia[0]} height="50" alt={el.title}/>
                                </td>
                                <td className={styles.cart_item_cell}>
                                    {el.title}
                                </td>
                                <td className={styles.cart_item_cell}>
                                    {el.quantity}
                                </td>
                                <td className={styles.cart_item_cell}>
                                    {integerDivide(el.price) + "$"}
                                </td>
                                <td className={styles.cart_item_cell}>
                                    <button type="button" className={styles.btn_cart_delete + " btn-close"}
                                            onClick={(e:React.MouseEvent<object>) => props.handleItemRemove({
                                                id: el.id, quantity: el.quantity, price: el.price
                                            })}>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={4}>Total:</td>
                            <td className="cart-modal_qty">{props.cartData.totalCount}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Total price:</td>
                            <td className="cart-modal_sum">{integerDivide(props.cartData.totalPrice) + "$"}</td>
                        </tr>
                        </tbody>
                    </Table>
                }
                {props.cartData.items.length === 0 &&
                    <h4>Your cart is empty</h4>
                }
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Link href={'/checkout'}>
                    <Button variant="success" type="submit" onClick={props.handleToggle}>
                        Checkout
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;