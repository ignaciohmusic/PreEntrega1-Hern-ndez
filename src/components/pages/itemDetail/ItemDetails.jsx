import { CardMedia, Grid } from "@mui/material"
import "./ItemDetails.css";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetails = ( {item, onAdd, initial} ) => {
  return (
    <Grid className="conteiner-detail" container >
        <div className="img-detail">
          <CardMedia component="img" height="100%" image={item.img}/>
        </div>
        <div className="title-description">
          <h1 className="title">{item.title}</h1>
          <div>
            <p>{item.description}</p>
          </div>
          <div>
          <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
          </div>
        </div> 
    </Grid>
  )
};

export default ItemDetails;