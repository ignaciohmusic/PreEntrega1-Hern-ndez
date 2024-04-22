import { products } from "../../productMock.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const {name} = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {

    let productsFiltered = products.filter( product => product.category === name)


    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(name ? productsFiltered : products);
        }, 500);
      } else {
        reject({ message: "Algo salio mal" });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((e) => {
        console.log(e);
      });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
