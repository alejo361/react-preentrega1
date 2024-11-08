import { CartProvider } from './context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="colored" position="top-center" />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido!"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"¡Bienvenido!"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>


    </div>
  )
}

export default App
