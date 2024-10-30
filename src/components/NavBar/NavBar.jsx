import CartWidget from './CartWidget'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="row">
            <header className="row">
                <div className="col text-center">
                    <Link to="/" >
                        <img className="img-responsive" src={logo} width={200} />
                    </Link>
                    <p className="frase fs-5">Tu tienda de tecnologia_</p>
                </div>
            </header>
            <nav className="row m-0 p-0">
                <div className="col" style={{ backgroundColor: "#22b455" }}>
                    <nav className="navbar navbar-nav navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse m-1 p-1 " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul mx-auto justify-content-center">
                                    <li className="nav-item ">
                                        <Link className="nav-link " aria-current="page" to="/">INICIO</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            CATEGORIAS
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark rounded-0" style={{ backgroundColor: "#22b455" }}>
                                            <li><Link to="/category/celulares" className="dropdown-item">Celulares</Link></li>
                                            <li><Link to="/category/computadoras" className="dropdown-item">Computadoras</Link></li>
                                            <li><Link to="/category/tablets" className="dropdown-item">Tablets</Link></li>
                                            <li><Link to="/category/accesorios" className="dropdown-item">Accesorios</Link></li>
                                            <li><Link to="/category/wearables" className="dropdown-item">Wearables</Link></li>
                                            <li><Link to="/category/camaras" className="dropdown-item">Cámaras</Link></li>
                                            <li><Link to="/category/monitores" className="dropdown-item">Monitores</Link></li>
                                            <li><Link to="/category/redes" className="dropdown-item">Redes</Link></li>
                                            <li><Link to="/category/audio" className="dropdown-item">Audio</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ">
                                        <CartWidget />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </nav>
    )
}

export default NavBar