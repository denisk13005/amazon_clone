import React from "react"
import "./home.scss"
import img from "../../assets/img/amazonSlide/61pmgcY2VIL._SX3000_.jpg"

const Home = () => {
  return (
    <main className="homeMainContainer">
      <section className="slideContainer">
        <img className="imgSlide" src={img} alt="" />
      </section>
    </main>
  )
}

export default Home
