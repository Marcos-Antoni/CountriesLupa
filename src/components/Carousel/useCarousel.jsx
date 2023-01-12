import { useState, useEffect, useContext } from "react";

//hooks
import useFetch from "../useFetch/index";

//context
import { Context } from "../../context/useContext";

export default function usehook() {
  // use
  const { input, head } = useContext(Context);
  const { contrys, getContrys, getContryName } = useFetch();
  const [arrayContrys, setArrayContrys] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [maxLength, setMaxLength] = useState(8);

  // functions
  const divideContrys = () => {
    let array = [];
    let arrayAux = [];

    for (let i = 0; i < contrys.length; i++) {
      arrayAux.push(contrys[i]);

      if (arrayAux.length === maxLength) {
        array.push(arrayAux);
        arrayAux = [];
      }
    }

    if (arrayAux.length > 0) array.push(arrayAux);

    setArrayContrys(array);
  };

  const DetectScreen = () => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  };

  const changeMaxLength = () => {
    if (width <= 710) {
      setMaxLength(2);
    } else if (width <= 1060) {
      setMaxLength(4);
    } else if (width <= 1400) {
      setMaxLength(6);
    } else {
      setMaxLength(8);
    }
  };

  // useEffect
  useEffect(() => {
    head("Countries", "/vite.svg");
    DetectScreen();
  }, []);

  useEffect(() => {
    divideContrys();
  }, [contrys, maxLength]);

  useEffect(() => {
    changeMaxLength();
  }, [width]);

  useEffect(() => {
    if (input === "") {
      getContrys();
    } else {
      getContryName(input, true);
    }
  }, [input]);

  return { arrayContrys };
}
