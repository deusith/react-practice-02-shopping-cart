import React from "react";

import NavCart from "./NavCart";

import "../../styles/navbar.scss";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<i className="fa-brands fa-steam"></i>
			<span className="user-welcome">Bienvenido!</span>
			
      <NavCart />
	</div>
	);
}

export default NavBar;