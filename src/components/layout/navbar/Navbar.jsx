import "./Navbar.css";
import { CartWidget} from "../../common/cartWidget/cartWidget.jsx";
import { Grid } from "@mui/material"
import { SearchWidget } from "../../common/searchWidget/searchWidget.jsx";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
      <Grid className="navbar" container spacing={2}  >
          <Link to="/">
            <img className="logo"
              src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1711230427/c03dcb109398499.651a0cd436b20_bysv9v.png"
              alt="Sequence Cafe"
            />
          </Link>
          <ul>
            <Link to="/">INICIO</Link >
            <Link to="category/cafe">CAFÉ</Link >
            <Link to="/category/te">TÉ GOURMET</Link >
            <Link to="/nosotros">NOSOTROS</Link >
            <Link to="">CLIENTES</Link >
          </ul>
          <div className="search-cart">
            <CartWidget />
            <SearchWidget />
          </div>
      </Grid>
    </header>
    
  );
};
