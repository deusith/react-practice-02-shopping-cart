import {useContext} from "react";

import ShoppingCartContext from "../context/shopping-cart-context";

import GameCatalog from "./views/GameCatalog";
import ProductPage from "./views/ProductPage"
import CheckoutPage from "./views/CheckoutPage";

import "../styles/main-section.scss"

const MainSection = () => {
  const {productSelected, displayCheckout} = useContext(ShoppingCartContext);
  const mainSectionJSX = (displayCheckout) ? <CheckoutPage /> : (productSelected) ? <ProductPage /> : <GameCatalog />;

  return (
    <div className="main-section"> {mainSectionJSX} </div>
  );
}

export default MainSection;