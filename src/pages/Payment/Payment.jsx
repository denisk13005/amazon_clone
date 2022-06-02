import React from "react"
import "./payment.scss"
import logo from "../../assets/img/blackLogo.png"
import { useSelector } from "react-redux"
import BastketItem from "../../components/BasketItem/BastketItem"
import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate()
  const items = useSelector((state) => state.products.basketItems)
  const products = useSelector((state) => state.products.products)
  const totalPrice = useSelector((state) => state.products.totalPrice)
  if (items === 0) {
    navigate("/basket")
  }
  return (
    <section
      className="paymentContainer
  "
    >
      <header className="headerPayment">
        <div className="headerContent">
          <img className="paymentLogo" src={logo} alt="amazon logo" />
          <h1>
            Passer la commande (
            <span style={{ color: "#007185" }}>
              {items} {items > 1 ? "articles" : "article"}
            </span>
            )
          </h1>
          <span>🔒</span>
          {/* <img
            className="paymentPadlock"
            src="https://images-eu.ssl-images-amazon.com/images/G/08/x-locale/checkout/truespc/secured-ssl._CB485936936_.png"
            alt=""
          /> */}
        </div>
      </header>
      <main className="mainContent">
        <div className="mainContent__left">
          <div className="deliveryAdress">
            1<span>Adresse de livraison</span>{" "}
            <span>
              Kirmann denis <br />
              34 rue virgile marron <br />
              Marseille, 13005
            </span>
            <span className="modif">Modifier</span>
          </div>
          <div className="paymentMode">
            2 <span>Selectionnez un mode de paiement</span>{" "}
            <div className="cartInfoContent">
              <div className="titleNameAndDateContent">
                <h3>Vos cartes de crédit et de débit</h3>
                <div className="nameAndDate">
                  <div className="name">Nom du titulaire</div>
                  <div className="date">Date d'expiration</div>
                </div>
              </div>
              <div className="cartContainer">Carts ....</div>
            </div>
          </div>

          <div className="itemsAndDelivery">
            3 <span>Vos articles</span>
            <div className="itemsContainer">
              {products.map((product, index) => (
                <BastketItem
                  description={product.description}
                  price={product.price}
                  img={product.img}
                  smallPrice={product.smallPrice}
                  stars={product.stars}
                  id={product.id}
                  qte={product.qte}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mainContent__right">
          <div className="btn"> Utiliser ce mode de paiement</div>
          <div className="recap">recap</div>
          <div className="totalAmount"></div>
        </div>
      </main>
    </section>
  )
}

export default Payment
