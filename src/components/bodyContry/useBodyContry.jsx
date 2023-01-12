import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//hooks
import useFetch from "../useFetch/index";

//Context
import { Context } from "../../context/useContext";

export default function useBodyContry() {
  //use
  const { setInput, head } = useContext(Context);
  const { countryName } = useParams();
  const { contrys, getContryName, getContryCodes } = useFetch();

  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [borders, setContry] = useState([]);

  //functions
  const getCurrencies = (arry) => {
    if (!arry) return "";

    let textCurrencies = Object.entries(arry).reduce((acc, [key, value]) => {
      return acc + (value.name || value) + ",";
    }, "");

    textCurrencies = textCurrencies.slice(0, -2);

    return textCurrencies;
  };

  const extractNames = async () => {
    const textCurrencies = getCurrencies(contrys[0].borders);
    const bordersArray = await getContryCodes(textCurrencies);

    setContry(bordersArray);
  };

  //useEffect
  useEffect(() => {
    setInput("");
    getContryName(countryName);
  }, [countryName]);

  useEffect(() => {
    if (contrys[0]) {
      head(contrys[0].name.common, contrys[0].coatOfArms.svg);
      setCurrencies(getCurrencies(contrys[0].currencies));
      setLanguages(getCurrencies(contrys[0].languages));
      extractNames();
    }
  }, [contrys]);

  return { contrys, currencies, languages, borders, countryName };
}
