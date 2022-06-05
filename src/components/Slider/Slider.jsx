import React, { useEffect, useState } from "react"
import { backgroundSlide } from "../../assets/backgroundSlide.js"
import chevron from "../../assets/img/chevron.png"
import "./slider.scss"

const Slider = () => {
  const [slide, setSlide] = useState()
  const [index, setIndex] = useState(0)
  const [imgClass, setImgClass] = useState("")

  const previous = () => {
    setImgClass("")

    if (index === 0) {
      setTimeout(() => {
        console.log("timeout")
        setIndex(slide.length - 1)
        setImgClass("imgSlideLeft")
      }, 0.15)
    } else {
      setIndex(index - 1)
      setTimeout(() => {
        setImgClass("imgSlideLeft")
      }, 0.15)
    }
  }

  const next = () => {
    setImgClass("")
    if (index === slide.length - 1) {
      setTimeout(() => {
        console.log("timeout")

        setIndex(0)
        setImgClass("imgSlideRight")
      }, 0.15)
    } else {
      setIndex(index + 1)
      setTimeout(() => {
        setImgClass("imgSlideRight")
      }, 0.15)
    }
  }

  useEffect(() => {
    setSlide(backgroundSlide)
    setImgClass("imgSlide")
  }, [])

  return (
    <section className="slideContainer">
      <div
        className="chevronContainer chevronContainer__left"
        onClick={previous}
      >
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
