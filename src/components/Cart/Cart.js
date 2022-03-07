import classes from "./Cart.module.css";
import Modal from "./Modal";
import { useContext } from "react";
import CardContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CardContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItem = cartCtx.items.length > 0;

	const removeItem = (id) => {
      cartCtx.removeItem(id)
    };

	const addCartItem = (item) => {
        cartCtx.addItem({...item, amount: 1})
    };

	const cartItem = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
            onRemove= {removeItem.bind(null, item.id)}
            onAdd= {addCartItem.bind(null, item)}
		/>
	));

	return (
		<Modal onCloseM={props.onCloseApp}>
			{cartItem}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onCloseApp}>
					Close
				</button>
				{hasItem && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
