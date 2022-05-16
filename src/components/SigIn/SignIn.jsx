import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./signIn.scss"

const SignIn = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const user = {
    email,
    password,
  }
  console.log(user)

  const rememberMeToggle = (e) => {
    e.target.checked ? setRememberMe(true) : setRememberMe(false)
  }
  console.log(rememberMe)
  /**
   * prevent the refresh and launch getAuth function
   * @param {event} e
   */
  const loggIn = (e) => {
    console.log("submit")
    rememberMe && localStorage.setItem("testAmazon²", JSON.stringify(user))
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
  console.log(email, password)
  return (
    <div className="signInContainer">
      <form className="signInForm" onSubmit={loggIn}>
        <p className="loginTitle">Login</p>
        <label className="emailLabel" htmlFor="userMail">
          Email
        </label>
        <input
          type="text"
          name="userMail"
          id="userMail"
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
        <div className="rememberMe">
          <input id="check" type="checkbox" onChange={rememberMeToggle} />
          <label htmlFor="check">Keep me signed in.</label>
        </div>
        <p className="newOnAmazon">New to Amazon ?</p>
        <div
          className="createYourAccount"
          onClick={() => props.setSignIn(false)}
        >
          Create your Amazon account
        </div>
      </form>
    </div>
  )
}

export default SignIn
