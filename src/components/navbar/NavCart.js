import React, {useContext} from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

const NavCart = () => {
  const {cartGames, setDisplayCheckout} = useContext(ShoppingCartContext);
  
  const handleDisplayCheckout = () => {
    if(cartGames.length) {
      setDisplayCheckout(true);
    }
  }
  
  return (
    <div className="nav-cart" onClick={handleDisplayCheckout}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="cart-counter">{cartGames.length > 9 ? "9+" : cartGames.length }</span>
    </div>
  );
}

export default NavCart;
