import React, {useContext} from "react";

import ShoppingCartContext from "../../context/shopping-cart-context";

import RoundedLabel from "../basic/RoundedLabel";
import InCartAlert from "../basic/InCartAlert";

import "../../styles/game-card.scss";

const GameCard = props => {
	const {name, price, cover, tags, id} = props.game;
  const {cartGames} = useContext(ShoppingCartContext);
  const isInCart = cartGames.includes(id);

	return(
			<div className="game-card" onClick={props.onClick}>
				<div className="card-oversize">
          { isInCart ? <InCartAlert /> : ""}
					<div className="cover">
						<img src={cover} alt={name} />
					</div>
					<div className="footer">
						<div className="name">{name}</div>
						<div className="price">{price > 0 ? `$${price}` : "GRA-TIS"}</div>
						<div className="tags">
							{ tags.map(t => <RoundedLabel key={`gc-rl-${t}`} tag={t} /> )}
						</div>
					</div>
				</div>
			</div>
	);
}

export default GameCard;