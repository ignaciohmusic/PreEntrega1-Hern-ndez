import "./Footer.css";
import { Box, Button, Grid, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Grid className="footer" container flexWrap={"nowrap"} justifyContent={"center"}>
      <Grid className="container-footer" item>
        <Grid item xs={12} sm={6}>
          <div className="contacto">
            <li><Link to="">Contacto</Link></li>
            <li><Link to="">Preguntas frecuentes</Link></li>
            <li><Link to="">Envíos y devoluciones</Link></li>
            <li><Link to="">Nota Legal</Link></li>
            <li><Link to="">Política de Privacidad</Link></li>
            <li><Link to="">Política de reembolso</Link></li>
            <li><Link to="">Términos del servicio</Link></li>
          </div>
          <div className="redes">
            <Link><FacebookIcon style={{ color: "#000000" }}/></Link>
            <Link><InstagramIcon style={{ color: "#000000" }}/></Link>
            <Link><YouTubeIcon style={{ color: "#000000" }}/></Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="atencion-cliente">
              <p><strong>Horario de atención al cliente:</strong></p>
              <span>Lunes a Jueves de 9h a 17h</span>
              <span>Viernes de 9h a 14h</span>
              <span>+54 11 1234-5678 </span>
              <span>hola@sequencecafe.com</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="letter">
            <p><strong>COFFEE LETTER</strong></p>
            <p>
              Suscríbete a nuestra newsletter y comparte con nosotros las últimas
              novedades, métodos de elaboración y trucos para preparar el mejor
              café.
            </p>
          </div>
          <div className="input-mail-button">
            <Box component="form" sx={{
                "& > :not(style)": { marginTop: 3, width: "33ch" },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{ borderColor: "#222222" },
                "& .Mui-focused": { color: "#222222" }, paddingLeft:"px"
              }}
              noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <div className="button">
              <Button
                variant="contained"sx={{ 
                  backgroundColor: "#a9483d", "&:hover": { backgroundColor: "#a9483d" },}}>
                Enviar
              </Button>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024, Sequence Café</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
