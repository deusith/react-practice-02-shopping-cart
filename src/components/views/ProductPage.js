import React, {useState, useContext} from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

import RoundedLabel from "../basic/RoundedLabel";
import PurchaseModal from "../modals/PurchaseModal";

import "../../styles/product-page.scss";

import {GAME_LIST} from "../../constants";

const ProductPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {productSelected, setProductSelected, cartGames, setCartGames, setDisplayCheckout} = useContext(ShoppingCartContext);
  
  const product = GAME_LIST.find(p => p.id === productSelected);
  const isProductInCart = cartGames.includes(product.id);
  
  const inCartButtonJSX = <span>Proceder a la pagación <i className="fa-solid fa-credit-card" /></span>;
  const notInCartButtonJSX = <span>Agregar al carrito <i className="fa-solid fa-cart-plus" /></span>;
  
  const productPurchaseHandle = id => {
    if(!isProductInCart){
      setIsModalVisible(true);
      setCartGames([...cartGames, product.id].sort())
    }
    else {
      if(isModalVisible) {
        setIsModalVisible(false);
      }
      setProductSelected(0);
      setDisplayCheckout(true);
    }
  }
  
  const closeProductPage = () => {
    setProductSelected(0);
  }
  
  return (
    <div className="product-page">
      <PurchaseModal name={product.name} cover={product.cover} isVisible={isModalVisible} onContinue={closeProductPage} />
      <img className="product-cover" src={product.cover} alt={product.name} />
      <div className="product-data">
        <h1 className="product-name">
          {product.name}
          { isProductInCart ? <span className="in-cart-alert"><i className="fa-solid fa-cart-shopping" /></span> : "" }
          <span className="close-product" onClick={closeProductPage}>
            <i className="fa-solid fa-xmark" />
          </span>
        </h1>
        <div className="product-details">
          <span className="price">
            {
              (0 === product.price ? "GRA-TIS" : `$${product.price}`)
            }
          </span>
          <span className="tags">
            {
              product.tags.map(tag => <RoundedLabel key={`pp-rl-${tag}`} tag={`${tag}`} />)
            }
          </span>  
        </div>
        <div className="product-desc">{product.description}</div>

        <div className="product-purchase">
          <button onClick={productPurchaseHandle}> 
            { isProductInCart ?  inCartButtonJSX : notInCartButtonJSX }
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;