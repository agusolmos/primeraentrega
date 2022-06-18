import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav style={{ display: 'flex'}}>
            <h3 className="Titulo-Nav-Product">Productos</h3>
            <div>
                <button>Retro</button>
                <button>Tablero</button>
                <button>Pedestal</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar