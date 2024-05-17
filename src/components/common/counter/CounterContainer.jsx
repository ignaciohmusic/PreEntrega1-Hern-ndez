import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Stock máximo conseguido",
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Agregue por lo menos 1 producto",
      });
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
  };

  return <CounterPresentacional {...objectProps} />;
};
