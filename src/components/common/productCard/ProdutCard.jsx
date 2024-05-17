import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProdutCard = ({ title, price, img, id}) => {

  return (
    <>
      <Card sx={{ maxWidth: 500, margin: "55px", boxShadow:"none", borderRadius:"1.5rem"}}>
        <Link to={`/itemDetail/${id}`}>
          <CardActionArea >
            <CardMedia component="img" height="100%" image={img} alt={title} />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ direction: "row", fontFamily: "Bricolage Grotesque, sans-serif", fontSize: "1.2rem", fontWeight: "500", textTransform:"uppercase" }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  fontSize: "18px",
                }}
              >
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        {/* <CardActions sx={{ justifyContent: "center" }}>
          <Link to="">
            <Button
              size="small"
              color="primary"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "15px",
                color: "black",
              }}
            >
              AÑADIR AL CARRITO
            </Button>
          </Link>
        </CardActions> */}
      </Card>
    </>
  );
};

export default ProdutCard;
