import React, { useEffect, useState } from "react"
import "./basketItem.scss" // is the same component of product just the button change
import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "../../utils/Redux-toolkit/products"

const BastketItem = ({ description, price, smallPrice, stars, img, id }) => {
  const product = { description, price, smallPrice, stars, img, id }

  // REDUX STATE
  const basketItems = useSelector((state) => state.products.basketItems)

  //useDispatch
  const dispatch = useDispatch()
  //dispatch remove product
  const removeProd = () => {
    dispatch(removeProduct(product))
  }

  //calcul total price
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(total + parseFloat(`${price}.${smallPrice}`))
  }, [])
  console.log(typeof total)
  return (
    <>
      <div className="basket">
        <div className="headerProduct">
          <p className="product__description">{description}</p>
          <p className="product__price">
            €<strong>{price}</strong>.<small>{smallPrice}</small>
          </p>
          <div className="product__stars">
            {Array(stars)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        </div>

        <div className="imgAndButton">
          <div className="imgContainer">
            <img src={img} alt="" className="product__image" />
          </div>
          {/* {}
          <button onClick={removeProd}>Supprimer du panier</button> */}
        </div>
      </div>
    </>
  )
}

export default BastketItem
