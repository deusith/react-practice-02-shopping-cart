import {useContext} from "react";

import CreditCardContext from "../../context/credit-card-context";

import CardOption from "./CardOption";

import {C_CARD_LIST} from "../../constants";

import "../../styles/change-card-modal.scss";

const ChangeCardModal = () => {
  const {ccSelected, setCCSelected, setIsModalVisible} = useContext(CreditCardContext);
  
  const selectNewCardHandle = () => {
    setCCSelected(ccSelected);
    setIsModalVisible(false);
  }
  
  return (
    <div className="change-card-modal">
      <div className="dialog">
        <h2> Cambiar tarjeta </h2>
        <div className="content">
          <div className="cc-picker">
            {C_CARD_LIST.map(card => <CardOption
                                        key={`card-${card.split(" ").join()}`} 
                                        number={card} 
                                        selected={card === C_CARD_LIST[ccSelected]}
                                        onSelect={ () => setCCSelected( C_CARD_LIST.indexOf(card) )} 
                                     />)}
          </div>
          <div className="buttons">
            <button className="cancel" onClick={() => setIsModalVisible(false)}> Cancelar</button>
            <button className="accept" onClick={selectNewCardHandle}> Cambiar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeCardModal;