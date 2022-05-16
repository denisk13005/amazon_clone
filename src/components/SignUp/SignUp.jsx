import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./signUp.scss"

const SignUp = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("second")
  const [errorMessage, setErrorMessage] = useState("  ")
  const signUp = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      console.log("signup")
      setErrorMessage("")
    } else {
      setErrorMessage("Les mots de passe doivent être identiques")
    }
  }
  return (
    <div className="signUpContainer">
      <form className="signInForm" onSubmit={signUp}>
        <p className="signUpTitle">Create Account</p>
        <label className="name" htmlFor="userName">
          Your name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          autoFocus
          required
        />

        <label className="emailLabel" htmlFor="userMail">
          Email
        </label>
        <input
          type="email"
          name="userMail"
          id="userMail"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          autoFocus
          required
        />

        <label className="passwordLabel" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          minLength={8}
        />
        <label
          className="passwordLabel"
          htmlFor="confirm
        Password"
        >
          Re-enter password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="SignUp" />

        <p className="line"></p>
        <div className="haveAccount">
          Already have an account?
          <span to="/connection" onClick={() => props.setSignIn(true)}>
            LoggIn
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignUp
