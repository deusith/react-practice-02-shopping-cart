import ReactDOM from "react-dom";
import {useContext} from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

import "../../styles/commons-modals.scss";

const PurchaseModal = (props) => {
  const {name, cover, onContinue} = props;
  const {setDisplayCheckout} = useContext(ShoppingCartContext);
  
  const innerJSX = (
    <div className="purchase-modal">
      <div className="dialog">
        <h2>
          ¡<strong>{name}</strong> Agregado al carrito!
        </h2>
        <div className="content">
          <img src={cover} alt={name} />
          <div className="buttons">
            <button className="return" onClick={onContinue}>
              Continuar comprando
              <i className="fa-solid fa-cart-plus" />
            </button>
            <button className="checkout" onClick={() => setDisplayCheckout(true)}>
              Proceder a la pagación
              <i className="fa-solid fa-credit-card" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return ( props.isVisible && ReactDOM.createPortal(innerJSX, document.getElementById("purchase-modal")) ) 
};

export default PurchaseModal