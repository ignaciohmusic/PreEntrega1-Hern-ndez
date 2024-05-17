import { Button } from "@mui/material"
import "./Nosotros.css"
import { Link } from "react-router-dom"
export const Nosotros = () => {
  return (
    <div>
        <div className="img-title">
            <h1>Nosotros</h1>
            <h3>Tenemos un proposito claro, hacerte disfrutar con el café</h3>
        </div>
        <div className="div-img">
            <img src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1715798631/view-roasted-coffee-beans_j8flcu.jpg" alt="Banner granos de cafe" />
        </div>
        <div className="coffe-content">
            <div className="nuestro-cafe">
                <h2>NUESTRO CAFÉ</h2>
                <p>
                Un proceso de elaboración único, en el que cada paso es clave
                <br />
                para sorprenderte y hacer que su aroma y sabor permanezca en
                <br />
                tu recuerdo y en tu paladar hasta 15 minutos después. 
                </p> 
                <p>
                    Para alcanzarlo nos abastecemos de los mejores granos de café
                    <br /> 
                    arábicos siguiendo siempre estrictos principios éticos.
                </p>
            </div>
            <div className="nuestro-tostado">
                <h2>NUESTRO TOSTADO</h2>
                <p>
                    Cada café que ofrecemos exige un perfil de tostado único para crear
                    <br />
                    una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un 
                    <br />
                    delicado balance en calor, tiempo y arte, nuestros maestros en el 
                    <br />
                    tostado hacen resaltar estas únicas características de cada grano de café. 
                </p>
            </div>
            <div className="tipos-cafe">
                <h2>DESCUBRE TODOS NUESTROS TIPOS CAFÉS</h2>
                <p>
                    Desde el cultivo responsable hasta el tostado, cada detalle en la
                    <br /> 
                    elaboración de manera artesanal es fundamental para poder disfrutar
                    <br /> 
                    de una taza de café Sequence. Y además de la esencia de los granos,
                    <br /> 
                    sabemos que la forma en la que se prepara el café tiene un efecto
                    <br /> 
                    sorprendente en el sabor de cada taza y define su cuerpo.
                </p>
                <div>
                    <img src="https://res.cloudinary.com/djrrc5dpd/image/upload/v1715805627/Barista_sequence_cafe_cmafzr.png" alt="" />
                </div>
                <div className="button-nosotros">
                    <Button variant="outlined"  
                        sx={{color:"#000000", fontWeight:"600", borderRadius:"2rem", borderColor:"#000000" ,
                        "&:hover": { borderColor: "#000000" }}}>
                        <Link to="/category/cafe">Conoce nuestros cafés</Link>
                    </Button>  
                </div>   
            </div>
        </div>

        
    </div>
  )
}
