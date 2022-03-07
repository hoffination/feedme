import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return ( 
      <header className={classes.header}>
        <h1>Feed Me</h1>        
        <HeaderCartButton onClickHB={props.onShowCart} />
      </header>
    );
};

export default Header;
