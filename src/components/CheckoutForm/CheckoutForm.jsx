import React, { useState } from "react"
import { useSelector } from "react-redux"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import axios from "axios"

const CheckoutFormBuild = () => {
  const totalPrice = useSelector((state) => state.products.totalPrice)
  const stripe = useStripe()
  const elements = useElements()

  const [err, seterr] = useState("")
  const [processed, setProcessed] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessed(true)
    if (elements == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    if (!error) {
      console.log("paiement généré", paymentMethod)
      //envoi du token au backend
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            id,
            amount: totalPrice * 100,
          }
        )
        console.log(response)
        if (response.data.success) {
          alert("paiement effectué")
          setProcessed(false)
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log(error.message)
      seterr(error.message)
      setProcessed(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
      <CardElement />
      <button
        style={{ marginLeft: "50%", marginTop: "20px" }}
        type="submit"
        disabled={!stripe || !elements || processed}
      >
        Pay
      </button>
      <div style={{ color: "red", fontWeight: "normal" }}>{err}</div>
    </form>
  )
}

const stripePromise = loadStripe(
  "pk_test_51L4iIZK8J6YcJIPL93lpBPiRdRyF2z8KW6vfU5h8xQ1bC6Xtk6k24EPX0Z7OTdCeTodmcF4geq0XSPA8xV4F2BJU00QiIVyLXR"
)

const checkoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormBuild />
    </Elements>
  )
}
export default checkoutForm
