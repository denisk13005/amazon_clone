import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./signIn.scss"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  /**
   * prevent the refresh and launch getAuth function
   * @param {event} e
   */
  const loggIn = (e) => {
    e.preventDefault()
    // getAuth(userName, password)
  }

  /**
   * Ckeck the username and password in the firebase signInAuth api,
   * stock the response token in local storage and dispatch the redux logIn action  *
   * @param {string} userName
   * @param {string} password
   * @return accessToken connection if request ok or error if not
   */
  // const getAuth = async (userName, password) => {
  //   const auth = await signInAuth(userName, password)
  //   if (auth.accessToken) {
  //     localStorage.setItem("adminAccessToken", auth.accessToken)
  //     dispatch(logIn())
  //     setErrorMessage("")
  //   } else {
  //     setErrorMessage(auth.split("/")[1])
  //   }
  // }

  //unmount when loggedIn
  // useEffect(() => {
  //   return () => null
  // }, [adminLoggedIn])

  return (
    <div className="signInContainer">
      <form className="signInForm" onSubmit={loggIn}>
        <p className="loginTitle">Login</p>
        <label className="emailLabel" htmlFor="userName">
          Email or mobile phone number
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          autoFocus
        />

        <label className="passwordLabel" htmlFor="password">
          Password
          <NavLink to="/forgotPassword">Forgot Password</NavLink>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="LogIn" />
      </form>
    </div>
  )
}

export default SignIn
