import React, { useState } from "react"
import "./header.scss"
import logo from "../../assets/img/amazon_PNG1.png"
import basket from "../../assets/img/basket.png"
import search from "../../assets/img/search.svg"
const Header = () => {
  const [user, setUser] = useState("Denis")
  const [cartItems, setCartItem] = useState(0)
  return (
    <header className="header">
      <img className="logo" src={logo} alt="amazon logo" />
      <div className="search">
        <input type="search" />
        <div className="searchImgContainer">
          <img src={search} alt="search icone" className="loup" />
        </div>
      </div>
      <div className="rightOptions">
        <div className="rightOptions__option rightOptions__option--user">
          Bonjour {user}
          <br />
          <strong>Compte et listes</strong>
        </div>
        <div className="rightOptions__option rightOptions__option--return">
          Retours
          <br />
          <strong>et Commandes</strong>
        </div>
        <div className="rightOptions__option rightOptions__option--basket">
          <img src={basket} alt="basket icone" />
          <strong>Panier</strong>
          <span className="cartItems">{cartItems}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
