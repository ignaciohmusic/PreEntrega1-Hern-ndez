import { Button } from "@mui/material"
import "./Checkout.css"
import { CartContext } from "../../../context/CartContext"
import { useContext, useState } from "react"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";


const Checkout = () => {

  const {cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    NombreCompleto:"",
    Email:"",
    Direccion:"",
    Ciudad:"",
    Provincia:"",
    CodigoPostal:"",
  })

  const handleChange = (event) => {
    let {name, value } = event.target;
    setInfo({...info, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj)
      .then((res) => setOrderId(res.id))
      .catch((error) =>  Error);

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  return (
    <div>
      {orderId ? (
        <div>
          <h1 className="h1-id">Su ID de compra es #{orderId}</h1>
          <Link className="volver-inicio" to="/" >
              <Button variant="contained" sx={{
                backgroundColor: "#f2f2f2", color:"#4A4A4A", 
                "&:hover": { backgroundColor: "#006241", color:"#ffffff", },}}>
                Volver al inicio
              </Button>
            </Link>
        </div>
      ) : (
        <div className="div-container-chekout">
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="column">
              <h3 className="title">Dirección de Envio </h3>
              <div className="input-box">
                <span>Nombre Completo :</span>
                <input type="text" placeholder="Nombre Completo" onChange={handleChange} name="NombreCompleto" />
              </div>
              <div className="input-box">
                <span>Email :</span>
                <input type="email" placeholder="Email" onChange={handleChange} name="Email" />
              </div>
              <div className="input-box">
                <span>Direccion :</span>
                <input type="text" placeholder="Direccion" onChange={handleChange} name="Direccion" />
              </div>
              <div className="input-box">
                <span>Ciudad :</span>
                <input type="text" placeholder="Ciudad" onChange={handleChange} name="Ciudad" />
              </div>
              <div className="div-flex">
                <div className="input-box">
                  <span>Provincia :</span>
                  <input type="text" placeholder="Provincia" onChange={handleChange} name="Provincia" />
                </div>
                <div className="input-box">
                  <span>Codigo Postal :</span>
                  <input type="number" placeholder="Codigo Postal" onChange={handleChange} name="CodigoPostal" />
                </div>
              </div>
            </div>
            <div className="column">
              <h3 className="title">Datos de Pago </h3>
              <div className="input-box">
                <span>Tarjetas Aceptadas :</span>
                <img src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1715610303/klipartz.com_pkn56v.png" alt="" />
              </div>
              <div className="input-box">
                <span>Numero de Tarjeta :</span>
                <input type="number" placeholder="Numero de Tarjeta" />
              </div>
              <div className="input-box">
                <span>Titular de Tarjeta :</span>
                <input type="text" placeholder="Titular de Tarjeta" />
              </div>
              <div className="input-box">
                <span>Exp. Mes :</span>
                <input type="text" placeholder="Exp. Mes" />
              </div>
  
              <div className="div-flex">
                <div className="input-box">
                  <span>Exp. Año :</span>
                  <input type="number" placeholder="Exp. Año" />
                </div>
                <div className="input-box">
                  <span>CVV :</span>
                  <input type="number" placeholder="CVV" />
                </div>
              </div>
              </div>
            </div>
            <Button variant="contained" type="submit" sx={{
                backgroundColor: "#f2f2f2", color:"#4A4A4A", padding:"10px",width: "100%", 
                "&:hover": { backgroundColor: "#006241", color:"#ffffff", },}}>
              Enviar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout