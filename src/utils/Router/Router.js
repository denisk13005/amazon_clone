import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/Header/Header"
import Connection from "../../pages/Connection/Connection"
import Home from "../../pages/Home/Home"

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
