import { Link } from "react-router-dom";
import "./Cart.css"
const Cart = () => {
  return (
    <>
     <div className="carrito-vacio">
      <h2>Carrito de compra</h2>
      <br />
      <p>Su carrito actualmente está vacío.</p>
      <br />
      <p>Continúe explorando <Link to="/">aquí</Link>.</p>
     </div>
    </>
  )
}
export default Cart;
