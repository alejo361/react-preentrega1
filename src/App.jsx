import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'



function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenido a N-TEC!"} />
    </div>
  )
}

export default App
