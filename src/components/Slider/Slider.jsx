import React, { useEffect, useState } from "react"
import { backgroundSlide } from "../../assets/backgroundSlide.js"
import chevron from "../../assets/img/chevron.png"
import "./slider.scss"

const Slider = () => {
  const [slide, setSlide] = useState()
  const [index, setIndex] = useState(0)

  const [imgClass, setImgClass] = useState("")

  const previous = () => {
    if (index === 0) {
      setIndex(slide.length - 1)
    } else {
      setIndex(index - 1)
      imgClass === "imgSlide2"
        ? setImgClass("imgSlide")
        : setImgClass("imgSlide2")
    }
  }

  const next = () => {
    if (index === slide.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
      imgClass === "imgSlide2"
        ? setImgClass("imgSlide")
        : setImgClass("imgSlide2")
    }
  }

  useEffect(() => {
    setSlide(backgroundSlide)
    setImgClass("imgSlide")
  }, [])

  return (
    <section className="slideContainer" onClick={previous}>
      <div className="chevronContainer chevronContainer__left">
        <img className="chevron chevron__left" src={chevron} alt="" />
      </div>

      <img className={imgClass} src={slide && slide[index].link} alt="" />
      <div className="chevronContainer chevronContainer__right" onClick={next}>
        <img className="chevron chevron__right" src={chevron} alt="" />
      </div>
    </section>
  )
}

export default Slider
