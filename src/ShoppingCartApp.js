import React, {useState} from "react";

import ShoppingCartContext from "./context/shopping-cart-context";

import NavBar from "./components/navbar/NavBar";
import MainSection from "./components/MainSection";

const ShoppingCartApp = () => {
  const [productSelected, setProductSelected] = useState(0);
  const [cartGames, setCartGames] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState( cartGames.Length );
  
  const shoppingCartContextValue = {
    productSelected, setProductSelected,
    cartGames, setCartGames,
    displayCheckout, setDisplayCheckout    
  };
  
  return (
		<div className="main-container">
      <ShoppingCartContext.Provider value={shoppingCartContextValue} >
        <NavBar />
        <MainSection />
      </ShoppingCartContext.Provider>
		</div>
	);
}

export default ShoppingCartApp;