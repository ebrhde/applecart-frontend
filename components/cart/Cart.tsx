import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import CartModal from "./CartModal";
import {removeFromCard, cartSlice} from "../../redux/cart/cartSlice";
import {UISlice} from "../../redux/ui/uiSlice";

const Cart:FC = () => {
    const userId = useAppSelector((state) => state.user.id);
    const dispatch = useAppDispatch();

    const handleItemRemove: (object) => void = (item) => {
        if(userId) {dispatch(removeFromCard(item.id));}
        else dispatch(cartSlice.actions.removeItem(item));
    }

    const handleCartToggle: () => void = () => {
        dispatch(UISlice.actions.toggleCartShown())
    }

    const cartData = useAppSelector((state) => {
        return {
            isShown: state.ui.isCartShown,
            items: state.cart.items,
            totalCount: state.cart.totalCount,
            totalPrice: state.cart.totalPrice,
        }
    });

    return(
        <CartModal handleToggle={handleCartToggle} handleItemRemove={handleItemRemove} cartData={cartData} />
    )
}

export default Cart;