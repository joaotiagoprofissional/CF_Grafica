import { Menu } from "./components/menu/Menu"
import { Main } from "./pages/main/Main"
import { Products } from "./pages/products/Products"
import { About } from "./pages/about/About"
import { Contact } from "./pages/contact/Contact"
import { Footer } from "./components/footer/Footer"


function App() {
  

  return (
    <div>
      <Menu />
      <Main />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
