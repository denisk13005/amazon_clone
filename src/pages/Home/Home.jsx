import React from "react"
import "./home.scss"
import img from "../../assets/img/amazonSlide/61pmgcY2VIL._SX3000_.jpg"
import { useSelector } from "react-redux"
import PleaseLogin from "../../components/PleaseLoggin/PleaseLogin"

const Home = () => {
  const userLoggegIn = useSelector((state) => state.user.userLoggedIn)
  return (
    <main className="homeMainContainer">
      {userLoggegIn ? (
        <section className="slideContainer">
          <img
            className="imgSlide"
            src="https://m.media-amazon.com/images/I/81yicuL6kZL._SX3000_.jpg"
            alt=""
          />
        </section>
      ) : (
        <PleaseLogin />
      )}
    </main>
  )
}

export default Home
