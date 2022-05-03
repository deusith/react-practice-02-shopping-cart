import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ShoppingCartApp from "./ShoppingCartApp";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartApp />
  </React.StrictMode>,
  document.getElementById("shopping-cart-app")
);

/* ****************************************

Pending suff outside the scope of this excercise:

 * Change all text to english xD
 * A way to return to the catalog from the checkout view
 * Finish empty cart view
 * Finish payment flow
 * Refactor MainSection view logic to consider: catalog, product, checkout and purchase success views
 * Refactor card handling logic to allow users input a new card in the same select modal
 * Optimize modal, input and button components
 * Login, session and profile (?)
 * Get game, card, user and purchase data from an API

  KNOWN BUGS:
  * when you click one tag in the catalog, the product page is open. it should filter by that tag. (or add the tag to the filters)

**************************************** */