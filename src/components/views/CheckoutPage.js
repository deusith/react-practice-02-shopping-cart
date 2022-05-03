import {useContext} from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

import CheckoutCardList from "../checkout/CheckoutCardList";
import CartEmpty from "../checkout/CartEmpty";

import "../../styles/checkout-page.scss";

const CheckoutPage = () => {
  const {cartGames} = useContext(ShoppingCartContext);

  return <div className="checkout-page"> {cartGames.length ? <CheckoutCardList /> : <CartEmpty />} </div>;
}

export default CheckoutPage;