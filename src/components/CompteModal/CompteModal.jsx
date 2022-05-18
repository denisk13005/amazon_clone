import React from "react"
import "./compteModal.scss"

const CompteModal = ({ className, closeModal }) => {
  const disconnect = () => {
    console.log("diconnect")
  }
  return (
    <div className={className} onMouseLeave={closeModal}>
      <div className="modalContainer">
        <p onClick={disconnect}>Disconnect</p>
      </div>
    </div>
  )
}

export default CompteModal
