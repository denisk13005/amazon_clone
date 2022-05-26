import React, { useState } from "react"
import "./home.scss"
import { useSelector } from "react-redux"
import PleaseLogin from "../../components/PleaseLoggin/PleaseLogin"
import Product from "../../components/Product/Product"

const Home = () => {
  // const userLoggegIn = useSelector((state) => state.user.userLoggedIn)
  const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <main className="homeMainContainer">
      {userLoggedIn ? (
        <>
          <section className="slideContainer">
            <img
              className="imgSlide"
              src="https://m.media-amazon.com/images/I/81yicuL6kZL._SX3000_.jpg"
              alt=""
            />
          </section>
          <section className="productsContainer">
            <div className="productRow">
              <Product
                id="1"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/RolandGarros/RG_2022_V2HUD_Reactive_XSite_379x304_PV_fr-FR._SY304_CB636920623_.jpg"
                }
              />
              <Product
                id="2"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://m.media-amazon.com/images/I/81vkislowDL._AC_SX352_SY330_.jpg"
                }
              />
              <Product
                id="3"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://m.media-amazon.com/images/I/51DHYdC2uoL._AC_UL320_.jpg"
                }
              />
            </div>
            <div className="productRow">
              <Product
                id="4"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://m.media-amazon.com/images/I/71WZ60ItMmS._AC_UL320_.jpg"
                }
              />

              <Product
                id="5"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://m.media-amazon.com/images/I/71Tw+CeSKjL._AC_UL320_.jpg"
                }
              />
            </div>
            <div className="productRow">
              <Product
                id="6"
                description={"test"}
                price={12}
                smallPrice={5}
                stars={3}
                img={
                  "https://m.media-amazon.com/images/I/71HWjbeA1tL._AC_UL320_.jpg"
                }
              />
            </div>
          </section>
        </>
      ) : (
        <PleaseLogin />
      )}
    </main>
  )
}

export default Home
