import CartWidget from './CartWidget'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <nav className="row">
            <header className="row">
                <div className="col text-center">
                    <img className="img-responsive" src={logo} width={100}/>
                    <p className="frase">Tu tienda de tecnologia_</p>
                </div>
            </header>
            <nav className="row m-0 p-0">
                <div className="col" style={{ backgroundColor:"#22b455" }}>
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
                                        <a className="nav-link " aria-current="page" href="#">INICIO</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " aria-current="page" href="#">PEDIDO<span
                                            id="cantProdPedido" className="badge text-bg-secondary"><CartWidget  /> </span></a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " aria-current="page" href="" data-bs-toggle="modal"
                                            id="loginLink" data-bs-target="#mdLogin">INGRESAR</a>
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