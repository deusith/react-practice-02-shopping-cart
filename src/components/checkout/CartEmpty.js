import { useContext } from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

import "../../styles/cart-empty.scss";

const CartEmpty = () => {
  const {setDisplayCheckout} = useContext(ShoppingCartContext);

  return (
    <div className="cart-empty">
      <p>Tu Carrito necesita más juegos!</p>
      <button onClick={() => setDisplayCheckout(false)}>Seguir Comprando</button>
    </div>
  );
}

export default CartEmpty;