import "./ItemList.css";
import { Grid } from "@mui/material"
import ProdutCard from "../../common/productCard/ProdutCard";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <main>
      <Grid >
        <div>
          <div className="img-content">
            <h1>AROMAS, RECUERDOS, CAFÉ</h1>
            <p>Los aromas inesperados de un buen café despiertan todos tus sentidos</p>
            <button><Link to="/category/cafe">DESCÚBRELOS</Link></button>
          </div>
          <div className="img-container">
            <img src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1713212135/header04_1_igbmlk.jpg" alt="" />
          </div>
        </div>
        
        
      </Grid>
      <Grid container  spacing={2} justifyContent="center">
        {items.map(({id, title, price, img}) => {
          return (
            <Grid key={id} item xs={12} sm={6} md={4}>
                <ProdutCard 
                title={title} 
                price={price}
                img={img}
                id={id}
                />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default ItemList;
