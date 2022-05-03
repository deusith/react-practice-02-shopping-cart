import { useContext, useState } from "react";

import CreditCardContext from "../../context/credit-card-context";

import ChangeCardModal from "../modals/ChangeCardModal";

import {C_CARD_LIST} from "../../constants";

const CheckoutActions = () => {
  const {ccSelected, isModalVisible, setIsModalVisible} = useContext(CreditCardContext);
  const [cvvNumber, setCvvNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  const validateCvv = event => {
    const {value} = event.target;
    setButtonDisabled(isNaN(value) || value.length < 3)
    setCvvNumber(value);
  }
  
  return (
    <div className="cart-actions">
      {isModalVisible? <ChangeCardModal /> : ""}
      <input maxLength="4" placeholder="CVV" value={cvvNumber} onChange={validateCvv} />
      <button disabled={buttonDisabled}>
        Pagar con tarjeta **{ C_CARD_LIST[ccSelected].toString().slice(-2) }
        <i className="fa-solid fa-credit-card" />
      </button>
      <br />
      <a onClick={() => setIsModalVisible(true)}>Cambiar tarjetas</a>
    </div>
  );
}

export default CheckoutActions;