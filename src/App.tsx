import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from "./components/menu/Menu"
import { Main } from "./pages/main/Main"
import { Products } from "./pages/products/Products"
import { About } from "./pages/about/About"
import { Contact } from "./pages/contact/Contact"
import { Details } from "./pages/details/Details"
import { Footer } from "./components/footer/Footer"




function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Products />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
