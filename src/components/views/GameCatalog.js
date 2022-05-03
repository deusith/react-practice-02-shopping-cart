import React, {useReducer} from "react";

import GameCatalogContext from "../../context/game-catalog-context";
import FilterListContext from "../../context/filter-list-context";

import CatalogNavigation from "../catalog-navigation/CatalogNavigation";
import GameCardList from "../game-card-list/GameCardList";

import {GAME_LIST} from "../../constants";
import { gameCatalogReducer } from "../../functions";

const GameCatalog = () => {
  const gameCatalogInitialState = {
    gameList: GAME_LIST,
    filterList: []
  }
    
  const [gameCatalogState, gameCatalogDispatch] = useReducer(gameCatalogReducer, gameCatalogInitialState);

	return (
		<div className="game-catalog">
      <GameCatalogContext.Provider value={{gameList: gameCatalogState.gameList}}>
        <FilterListContext.Provider value={{filterList: gameCatalogState.filterList, gameCatalogDispatch}}>
          <CatalogNavigation />
        </FilterListContext.Provider>
        <GameCardList />
      </GameCatalogContext.Provider>
		</div>
	);
}

export default GameCatalog;