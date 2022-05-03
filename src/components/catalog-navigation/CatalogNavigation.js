import React, {useContext} from "react";

import FilterListContext from "../../context/filter-list-context";

import BasicInput from "../basic/BasicInput";
import FilterBar from "../filter-bar/FilterBar";

import "../../styles/catalog-navigation.scss";

const CatalogNavigation = (props) => {
  const {filterList, gameCatalogDispatch} = useContext(FilterListContext);
  
  return (
    <div className="catalog-navigation">
      <BasicInput
        type="text"
        placeholder="Filtro"
        onEnterPress={(payload) => { gameCatalogDispatch({type: "add-filter", payload}) }}
        />
      <FilterBar filters={filterList} />
    </div>
	);
}

export default CatalogNavigation;