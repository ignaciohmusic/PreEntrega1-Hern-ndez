import "./Navbar.css";
import { CartWidget} from "../../common/cartWidget/cartWidget.jsx";
import { SearchWidget } from "../../common/searchWidget/searchWidget.jsx";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="">
        <img className="logo"
          src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1711230427/c03dcb109398499.651a0cd436b20_bysv9v.png"
          alt=""
        />
      </a>
      <ul>
        <li><a href="">INICIO</a></li>
        <li><a href="">CAFÉ</a></li>
        <li><a href="">PANADERIA</a></li>
        <li><a href="">NOSOTROS</a></li>
        <li><a href="">CLIENTES</a></li>
      </ul>
      <div className="search-cart">
        <a href=""><CartWidget /></a>
        <a href=""><SearchWidget /></a>
      </div>
    </div>
  );
};
