import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Counter.css"
const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div className="div-container">
      <div className="div-addRemove">
        <Button onClick={restar} variant="text">
          <RemoveIcon sx={{ color: "black" }} />
        </Button>
        <h2>{contador}</h2>
        <Button onClick={sumar} variant="text">
          <AddIcon sx={{ color: "black" }} />
        </Button>
      </div>
      <div className="button-carrito">
        <Button 
          onClick={() => onAdd(contador)}
          variant="contained"
          sx={{
            backgroundColor: "#a9483d",
            "&:hover": { backgroundColor: "#a9483d" },
          }}>
          Agregar al carrito
        </Button>
      </div>
      
    </div>
  );
};

export default CounterPresentacional;
