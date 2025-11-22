import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Overview from "./pages/overview/Overview"
import Header from "./const/header/Header"
import Footer from "./const/footer/Footer"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/overview" element={<Overview />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
