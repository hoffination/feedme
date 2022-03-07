import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  
  const [buttonHighlighted, setButtonIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx
  const numberOfItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonHighlighted? classes.bump: ''}`; 

  useEffect(() =>{
      if(items.length === 0){
          return 
      }
    setButtonIsHighlighted(true); 
    const timer = setTimeout(() =>{
        setButtonIsHighlighted(false);
    }, 300)
    return () =>{
        clearTimeout(timer)
    }
  }, [items])
  
  return (
    <button className={btnClasses} onClick={props.onClickHB}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfItems} </span>
    </button>
  );
};

export default HeaderCartButton;
