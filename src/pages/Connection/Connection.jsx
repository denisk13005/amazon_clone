import React, { useState } from "react"
import SignIn from "../../components/SigIn/SignIn"
import SignUp from "../../components/SignUp/SignUp"
import blackLogo from "../../assets/img/blackLogo.png"
import "./connection.scss"

const Connection = () => {
  const [signIn, setSignIn] = useState(true)
  return (
    <div className="connectionContainer">
      <img className="connectionLogo" src={blackLogo} alt="amazon logo" />
      {signIn ? <SignIn /> : <SignUp />}
    </div>
  )
}

export default Connection
