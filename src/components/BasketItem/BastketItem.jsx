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
          <p className="stock">En stock</p>
          <div className="product__stars">
            {Array(stars)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
          <select placeholder="Qté">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={removeProd}>Supprimer du panier</button>
        </div>

        <div className="imgAndButton">
          <div className="imgContainer">
            <img src={img} alt="" className="product__image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BastketItem
