import { useContext, useEffect, useState } from "react";
import ItemDetails from "./ItemDetails.jsx";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";
import { db } from "../../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore"
import Swal from "sweetalert2";

const ItemDetailsContainer = () => {
  const { id } = useParams()
  const [item, setItems] = useState({})
  const {addToCart, getQuantityById} = useContext(CartContext)
  let initial = getQuantityById(+id)

  useEffect(()=>{
    let collectionProducts = collection(db, "products");
    let refDoc = doc(collectionProducts, id);    
    getDoc(refDoc).then((res) => {
      setItems({id: res.id, ...res.data()});
    });
  }, [id])
    
  const onAdd = (cantidad) => {
    let product = {...item, quantity: cantidad};
    addToCart( product );
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su producto se agrego correctamente al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
  return <ItemDetails item={item} onAdd={onAdd} initial={initial}/>;
};

export default ItemDetailsContainer;
