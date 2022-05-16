import React, { useEffect, useState } from "react"
import "./header.scss"
import logo from "../../assets/img/amazon_PNG1.png"
import basket from "../../assets/img/basket.png"
import search from "../../assets/img/search.svg"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
const Header = () => {
  //redux state
  const logged = useSelector((state) => state.user.adminLoggedIn)
  const userLogged = useSelector((state) => state.user.informations[0])
  userLogged && console.log(userLogged.name)
  //local state
  const [user, setUser] = useState("")
  const [cartItems, setCartItem] = useState(1)
  const [connected, setConnected] = useState(false)

  const navigate = useNavigate()

  const loggIn = () => {
    navigate("/connection")
  }
  useEffect(() => {
    userLogged && setUser(userLogged.name)
  }, [userLogged])
  return (
    <header className="header">
      <img className="logo" src={logo} alt="amazon logo" />
      <div className="search">
        <input type="search" />
        <div className="searchImgContainer">
          <img src={search} alt="search icone" className="magnifyingGlass" />
        </div>
      </div>
      <div className="rightOptions">
        {logged ? (
          <div className="rightOptions__option rightOptions__option--user">
            Bonjour {user}
            <br />
            <strong>Compte et listes</strong>
          </div>
        ) : (
          <div className="rightOptions__option " onClick={loggIn}>
            Hello Guest <br />
            <strong>Please LoggIn</strong>
          </div>
        )}

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
