import { useState } from "react";

const url = "https://restcountries.com/v3.1/";

export default function useFetch() {
  // use
  const [contrys, setContrys] = useState([]);

  // functions
  const fetchGet = async (subUrl) => {
    try {
      const response = await fetch(url + subUrl);
      const res = await response.json();

      return res;
    } catch (error) {
      return [];
    }
  };

  const getContrys = async () => {
    const res = await fetchGet("all");

    if (res.length > 20) res.length = 20;

    setContrys(res);
  };

  const getContryName = async (name, summary = false) => {
    setContrys([]);

    const res = await fetchGet(`name/${name}${!summary ? "?fullText=true" : ""}`);
    if (res.length > 20 && summary) res.length = 20;

    setContrys(res);
  };

  const getContryCodes = async (codes) => {
    if (codes == "") return [];

    const res = await fetchGet(`alpha?codes=${codes}`);

    const bordersArray = res.map((value) => {
      return value.name.common;
    });

    return bordersArray;
  };

  return { contrys, getContrys, getContryName, getContryCodes };
}
