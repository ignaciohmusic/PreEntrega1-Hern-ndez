import { CardMedia, Grid } from "@mui/material"
import "./ItemDetail.css";

const ItemDetail = ( {item} ) => {
  return (

    <Grid className="conteiner-detail" container >
        <div className="img-detail">
          <CardMedia component="img" height="100%" image={item.img}/>
        </div>
        <div className="title-description">
          <h1>{item.title}</h1>
          <div>
            <p>{item.description}</p>
          </div>
        </div> 
    </Grid>
  )
}

export default ItemDetail