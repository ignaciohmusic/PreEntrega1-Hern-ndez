import { Button } from "@mui/material";
import Swal from "sweetalert2";
import "./CartStyle.css";
import { Link } from "react-router-dom";

export const Cart = ({ cart, clearCart, deleteById, total }) => {
    const clearCartAlert = () => {
      Swal.fire({
        title: "Estas seguro?",
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Si, limpiar carrito",
        denyButtonText: "No, cancelar",
      }).then((res) => {
        if (res.isConfirmed) {
          clearCart();
          Swal.fire({
            title: "el carrito se limpio de forma exitosa",
            icon: "success",
          });
        }
      });
  
    }
  return (
    <>
      {cart.length === 0 ? (
        <div className="carrito-vacio">
          <h2>Carrito de compra</h2>
          <br />
          <p>Su carrito actualmente está vacío.</p>
          <br />
          <p>
            Continúe explorando <Link to="/">aquí</Link>.
          </p>
        </div>
      ) : (
        <>
          <div>
            <h1>Carrito de compra</h1>
          </div>
          {cart.map((product) => (
            <div key={product.id} className="card-carrito">
              <img src={product.img} />
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
              <h5>{product.quantity}</h5>
              <div >
                <Button variant="text" sx={{ color: "black" }} onClick={() => deleteById(product.id)}>Eliminar</Button>
              </div>
            </div>
          ))}
          <h3 className="subtotal">Subtotal ${total}</h3>
          <div className="button-limpiarFinalizar">
            <Button onClick={clearCartAlert} variant="contained" sx={{
                backgroundColor: "#f2f2f2", color:"#4A4A4A", 
                "&:hover": { backgroundColor: "#006241", color:"#ffffff", },}}>
              Limpiar carrito
            </Button> 
  
            {cart.length > 0 && (
              <Link to="/checkout">
                <Button variant="contained" sx={{
                  backgroundColor: "#f2f2f2", color:"#4A4A4A", 
                  "&:hover": { backgroundColor: "#006241", color:"#ffffff", },}}>
                  Finalizar compra
                </Button>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
  };
