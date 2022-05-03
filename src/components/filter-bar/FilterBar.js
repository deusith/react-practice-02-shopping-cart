import React, {useContext} from "react";

import FilterListContext from "../../context/filter-list-context";
import RoundedLabel from "../basic/RoundedLabel"

const FilterBar = ({filters}) => {
  const {gameCatalogDispatch} = useContext(FilterListContext);

	return(
		<div className="filters">
			{
				filters.map(
          filter => <RoundedLabel key={`fb-rl-${filter}`} tag={`${filter}`} closeable="true" onClick={(payload) => { gameCatalogDispatch({type: "remove-filter", payload}) }} />
        )
			}
		</div>
	);
}

export default FilterBar;