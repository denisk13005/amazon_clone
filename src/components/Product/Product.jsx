import React from "react"
import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from "../../utils/Redux-toolkit/products"
import "./product.scss"

const Product = ({ description, price, smallPrice, stars, img, id }) => {
  const product = { description, price, smallPrice, stars, img, id }
  const dispatch = useDispatch()
  const addBasket = () => {
    dispatch(addProduct(product))
  }

  return (
    <div className="product">
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
      <div className="imgAndButton">
        <div className="imgContainer">
          <img src={img} alt="" className="product__image" />
        </div>
        {}
        <button onClick={addBasket}>Ajouter au panier</button>
      </div>
    </div>
  )
}

export default Product
