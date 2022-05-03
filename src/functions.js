import {GAME_LIST} from "./constants";

export const filterGameList = (filters, gameList) => {
  const updatedGameList = filters.length === 0 ? [...GAME_LIST] : 
  gameList.filter( (game) => {
    return filters.find( filter => {
      return game.name.includes(filter) || game.tags.includes(filter) || game.id === filter;
    });
  });
  return updatedGameList;
}

export const gameCatalogReducer = (prevState, action) => {
  const {type, payload} = action;
  
  switch(type) {
    case "add-filter":
      if(prevState.filterList.includes(payload)) return prevState;    
      const newFilterList = [...prevState.filterList];
      newFilterList.push(payload);
      return {
          gameList: filterGameList(newFilterList, GAME_LIST),
          filterList: newFilterList,
        }
    case "remove-filter":
      const removedFilterList = [...prevState.filterList];
      removedFilterList.splice( prevState.filterList.indexOf(payload), 1 );
      const updatedGameList = filterGameList(removedFilterList, GAME_LIST);
      return {
          gameList: updatedGameList,
          filterList: removedFilterList,
        }
    default:
      return prevState;
  }
};