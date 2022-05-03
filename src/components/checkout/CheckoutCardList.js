import { useContext, useState } from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";
import CreditCardContext from "../../context/credit-card-context";

import CheckoutActions from "./CheckoutActions";
import CheckoutCard from "./CheckoutCard";

import {GAME_LIST, formatter} from "../../constants";

import { filterGameList } from "../../functions";

const CheckoutCardList = () => {
  const {cartGames, setCartGames} = useContext(ShoppingCartContext);
  const [ccSelected, setCCSelected] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Choose pickedGames like this b/c the filterGameList() returns the full games list if no filter is provided (ie cartGames is empty)
  const pickedGames = cartGames.length ? filterGameList(cartGames, GAME_LIST) : [];
  
  const totalAmountReducer = (previous, current) => {
    return previous + current.price;
  }
  
  const removeFromCartHandle = (id) => {
    if(pickedGames.length) {
      const newCartGames = [...cartGames];
      newCartGames.splice( newCartGames.indexOf(id), 1 );
      setCartGames(newCartGames);
    }
  }
  
  return (
    <div className="cart">
      <CreditCardContext.Provider value={{ccSelected, setCCSelected, isModalVisible, setIsModalVisible}}>
        <CheckoutActions />
      </CreditCardContext.Provider>
      
      {pickedGames.map(game => <CheckoutCard game={game} key={`co-${game.id}`} onClick={removeFromCartHandle} />)}

      <div className="cart-total">
        <div className="label">Total:</div>
        <div className="amount">{formatter.format( pickedGames.reduce(totalAmountReducer, 0) )}</div>
      </div>

    </div>
  );
}

export default CheckoutCardList;