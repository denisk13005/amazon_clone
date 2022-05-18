import React from "react"
import "./compteModal.scss"

const CompteModal = ({ className, toggleCompteModal }) => {
  const disconnect = () => {
    console.log("diconnect")
  }
  return (
    <div className={className} onMouseLeave={toggleCompteModal}>
      <div className="modalContainer">
        <p onClick={disconnect}>Disconnect</p>
      </div>
    </div>
  )
}

export default CompteModal
