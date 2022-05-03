import React, {useContext} from "react";

import GameCatalogContext from "../../context/game-catalog-context";
import ShoppingCartContext from "../../context/shopping-cart-context";

import GameCard from "./GameCard";

const GameCardList = () => {
  const {gameList} = useContext(GameCatalogContext);
  const {setProductSelected} = useContext(ShoppingCartContext);
	return (
		gameList.map( g => <GameCard key={g.id} game={g} onClick={() => setProductSelected(g.id)} /> )
	);
}

export default GameCardList;