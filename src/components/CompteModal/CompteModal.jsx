import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../utils/Redux-toolkit/user"
import "./compteModal.scss"

const CompteModal = ({ className, closeModal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const disconnect = () => {
    console.log("disconnect")
    dispatch(logOut())
    navigate("/connection")
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
