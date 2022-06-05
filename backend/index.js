const express = require("express")
const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.post("/stripe/charge", cors(), async (req, res) => {
  let { amount, id } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "Example charge",
      payment_method: id,
      confirm: true,
    })
    console.log(payment)
    res.json({
      success: true,
      message: "Payment successful",
    })
  } catch (err) {
    console.log(err)
    res.json({
      success: false,
      message: "Payment failed",
    })
  }
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started")
})
