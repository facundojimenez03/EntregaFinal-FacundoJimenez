import CartWidget from "./CartWidget/CartWidget";
import "./CartWidget/Estilos.css"
import "./CartWidget/Estilos.css"
import { NavLink ,Link } from "react-router-dom"

function NavBar() {
    return (
        <div> 
                  
                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link className="navbar-brand " to="/">
                 <img  className="fotoImg" src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-movil-degradado_23-2149697780.jpg" alt="Logo de Pagina" height={50}/>
                  </Link> 
                <Link className="navbar-brand" href="#" to="/">  INICIO </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to={`/category/iphone 11`} className="nav-link" aria-current="page" href="#">IPHONE 11</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/iphone 12`} className="nav-link" href="#">IPHONE 12</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/iphone 13`} className="nav-link" href="#">IPHONE 13</NavLink>
                            </li>
                            <div className="contenedorCarrito">
                                 <CartWidget/>
                           </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       
    )
}

export default NavBar