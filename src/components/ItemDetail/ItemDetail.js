import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [cantidadAgregada, setCantidadAagregada] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setCantidadAagregada(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)

  }



  return (
    <div className="Card detallesCard" >
      <img src={img} className="Card-Img-Top detalleCompra" alt={name} />
      <div className="Card-Body">
        <h1 className="Card-Title">{name}</h1>
        <p className="Card-Text">PRECIO: ${price}</p>
        <p className="Card-Text">STOCK DISPONIBLE: {stock}</p>
        <p className="Card-Text">CATEGORIA: {category}</p>
        <p className="Card-Text">DESCRIPCION: {description}</p>
        <footer className='card-text'>
          {
            cantidadAgregada > 0 ? (
              <div>
                <p>(Se agrego correctamente al carrito: {cantidadAgregada} {name} )</p>

                <Link to='/cart' className="btn btn-success mb-2 mt-3 p-2"> Terminar compra </Link>
                <Link to="/" className="btn btn-primary  mb-2 p-2">Seguir comprando</Link>

              </div>


            ) :
              (<ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />)
          }
        </footer>
      </div>
    </div>
  );
}

export default ItemDetail;