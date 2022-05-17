import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { signInAuth } from "../../firebase/apiDbFirebase"
import { fetchDbUser, logIn } from "../../utils/Redux-toolkit/user"
import "./signIn.scss"

const SignIn = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //local state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(" ")
  const [errorMessage, setErrorMessage] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  if (localStorage.userSignUp) {
  }
  const user = {
    email,
    password,
  }

  const rememberMeToggle = (e) => {
    e.target.checked ? setRememberMe(true) : setRememberMe(false)
  }

  useEffect(() => {
    if (localStorage.userPrefilledField) {
      const backFromSignUp =
        localStorage.userPrefilledField &&
        JSON.parse(localStorage.getItem("userPrefilledField"))
      setEmail(backFromSignUp.email)
      setPassword(backFromSignUp.password)
    } else if (localStorage.userRememberMe) {
      const rememberMeValue =
        localStorage.userRememberMe &&
        JSON.parse(localStorage.getItem("userRememberMe"))
      setEmail(rememberMeValue.email)
      setPassword(rememberMeValue.password)
    } else return
  }, [])

  /**
   * prevent the refresh and launch getAuth function
   * @param {event} e
   */
  const loggIn = async (e) => {
    e.preventDefault()
    console.log(email)
    const auth = await signInAuth(email, password)
    //remember me si
    if (rememberMe && auth.email === email) {
      localStorage.setItem("userRememberMe", JSON.stringify(user))
    } else if (!rememberMe && auth.email === email) {
      localStorage.removeItem("userRememberMe")
    } else {
      setErrorMessage(auth.split("/")[1])
    }
    auth.email && dispatch(fetchDbUser(email))
    auth.email && dispatch(logIn())
    localStorage.removeItem("userPrefilledField")
    auth.email && navigate("/home")
    console.log(auth.email)
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
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="Sign-In" />
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
