import Header from "../src/components/Layout/Header";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";
import Resturants from "./components/Resturants/Resturants";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseApp={hideCartHandler} />}
      <Header onShowCart={cartHandler} />      
      <Resturants />
    </CartProvider>
  );
}
// Test card
{
  /* <main className={classes.container}>
<div className={classes.resturant}>
<article className={classes.resturants}>
  <img className={classes.resturants__img} src="" />
  <div className={classes.resturants__data}>
    <h3 className={classes.resturants__name}>Resturant A</h3>
    <h4 className={classes.resturants__region}>Beautiful Place</h4>
    <p className={classes.resturants__row}><span>👫</span>60</p>
    <p className={classes.resturants__row}><span>🗣️</span>150</p>
    <p className={classes.resturants__row}><span>💰</span>20</p>
  </div>
</article>        
</div>
</main> */
}

export default App;
