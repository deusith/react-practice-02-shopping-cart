import {formatter} from "../../constants";

const CheckoutCard = (props) => {
  const {onClick} = props;
  const {name, cover, price, id} = props.game;
  
  const style = {backgroundImage : `url(${cover})`, backgroundColor: "red"};
  
  return (
    <div className="checkout-card">
      <div className="cover" style={style}></div>
      <div className="name">{name}</div>
      <div className="extras">
        <div className="price">{formatter.format(price)}</div>
        <div className="remove" onClick={() => onClick(id)}>
          Eliminar
          <span><i className="fa-solid fa-trash-can" /></span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;