import { useEffect, useState } from "react";
import { products } from "../../productMock";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
const ItemDetailsContainer = () => {
  const {id } = useParams()
  const [item, setItems] = useState({})
  useEffect(()=>{

    let itemDetectado = products.find((product)=> product.id === +id) 
    const getProduct = new Promise ( (resolve,reject)=>{
      resolve(itemDetectado)
    })

    getProduct.then((res)=>setItems(res))

  }, [id])
  
  console.log(item)
  
  
  return <ItemDetail item={item}/>;
};

export default ItemDetailsContainer;
