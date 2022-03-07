import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "./Card";
import classes from "./Resturants.module.css";
import { Data } from "./Data";

const Resturants = (props) => {
  const cartCtx = useContext(CartContext);
  const submitAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const resturantData = [Data];
  const featuredID = resturantData.map((item) =>
    item.featuredRestaurants.map((el) => el.restaurantId)
  );
  console.log(featuredID);

  return (
    <Fragment>
      <div>
        <h2>Featured Resturant</h2>
        <div className={classes.cards}>
          {resturantData.map((item) =>
            item.restaurants.map((res) => {
              for (let i = 0; i < featuredID.length; i++) {
                if (featuredID[i] == res.id) {
                  return (
                    <Card
                      key={res.id}
                      heading={res.name}
                      image={res.imageSmallUrl}
                      text={res.description}
                    />
                  );
                }
              }
            })
          )}
        </div>
      </div>
      <div>
        <h2>All Resturants</h2>
        <div className={classes.cards}>
          {resturantData.map((item) =>
            item.restaurants.map((res) => (
              <Card
                key={res.id}
                heading={res.name}
                image={res.imageSmallUrl}
                text={res.description}
              />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Resturants;
