import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Overview from "./pages/overview/Overview"
import Header from "./const/header/Header"
import Footer from "./const/footer/Footer"
import JoinPage from "./pages/join/Join"
function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/overview" element={<Overview />} />

        <Route path="/join" element={<JoinPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
