import React from "react"
import "./payment.scss"
import logo from "../../assets/img/blackLogo.png"

const Payment = () => {
  return (
    <section
      className="paymentContainer
  "
    >
      <div className="headerPayment">
        <div className="headerContent">
          <img className="paymentLogo" src={logo} alt="amazon logo" />
          <h1>Passer la commande </h1>
          <img
            className="paymentPadlock"
            src="https://images-eu.ssl-images-amazon.com/images/G/08/x-locale/checkout/truespc/secured-ssl._CB485936936_.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Payment
