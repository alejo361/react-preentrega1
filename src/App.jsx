import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import {BrowserRouter, Routes, Route} from "react-router-dom"     
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"¡Bienvenido!"} /> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"¡Bienvenido!"} /> }/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
