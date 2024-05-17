import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig.js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Skeleton } from "@mui/material";


const ItemListContainer = () => {
  const {name} = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection( db, "products" )
    let consult = productsCollection;
    if(name){
      consult= query(productsCollection, where("category", "==", name))
    }
    getDocs(consult).then((res) => {
      let newArray = res.docs.map((doc)=>{
        return{id: doc.id, ...doc.data()}
      });
      setItems(newArray);
    });
  }, [name]);

  if (items.length === 0) {
    return(
    <>
      <div>
          <Skeleton 
          variant="rectangular"
          sx={{boxShadow:"none"}}
          height={660}
          width={1901}
          />
      </div>
      <div className="skeleton">
        <div>
          <Skeleton 
            variant="rectangular"
            sx={{ margin: "55px 55px 0 55px", boxShadow:"none", borderRadius:"1.5rem"}}
            height={620}
            width={500}
          />
          <Skeleton
            variant="text"
            sx={{ margin: "0px 0 0px 200px", boxShadow:"none", borderRadius:"1rem"}}
            height={50}
            width={200}
          />
        </div>
        <div>
          <Skeleton 
            variant="rectangular"
            sx={{ margin: "55px 55px 0 55px", boxShadow:"none", borderRadius:"1.5rem"}}
            height={620}
            width={500}
          />
          <Skeleton
            variant="text"
            sx={{ margin: "0px 0 0px 200px", boxShadow:"none", borderRadius:"1rem"}}
            height={50}
            width={200}
          />
        </div>
        <div>
          <Skeleton 
            variant="rectangular"
            sx={{ margin: "55px 55px 0 55px", boxShadow:"none", borderRadius:"1.5rem"}}
            height={620}
            width={500}
          />
          <Skeleton
            variant="text"
            sx={{ margin: "0px 0 0px 200px", boxShadow:"none", borderRadius:"1rem"}}
            height={50}
            width={200}
          />
        </div>
      </div>
    </>
  );
}
//  const addDocsProducts = ()=> {
//   let productsCollection = collection(db, "products");
//   products.forEach((products) => addDoc(productsCollection, products));
//  }
  return(
    <>
      <ItemList items={items} />
      {/* <button onClick={addDocsProducts}>Add Documents</button> */}
    </>
  )
};

export default ItemListContainer;
