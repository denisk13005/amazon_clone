import React from "react"
import "./product.scss"
import img from "../../assets/img/blackLogo.png"

const Product = (props) => {
  console.log(props.width)
  return (
    <div className="product" style={{ width: props.width }}>
      <p className="product__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorem
        officiis. Consequatur provident dignissimos aut ex ea nam assumenda
        delectus.
      </p>
      <p className="product__price">10.36€</p>
      <div className="product__stars">⭐⭐⭐⭐⭐</div>
      <div className="imgAndButton">
        <div className="imgContainer">
          <img src={img} alt="" className="product__image" />
        </div>

        <button>Ajouter au panier</button>
      </div>
    </div>
  )
}

export default Product
