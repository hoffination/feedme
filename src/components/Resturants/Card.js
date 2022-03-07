import classes from "./Card.module.css";
const Card = props =>{
   return (
    <div className={classes.row}>
    <div className={classes.column}>
      <div className={classes.card}>
        <h3>{props.heading}</h3>
        <img className={classes.image} src={props.image} />
        <p>{props.text}</p>
      </div>
    </div>
  </div>
   )
}; 

export default Card; 