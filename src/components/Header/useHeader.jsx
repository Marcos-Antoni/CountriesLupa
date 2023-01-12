import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//context
import { Context } from "../../context/useContext";

export default function useHeader() {
  //use
  const { input, setInput } = useContext(Context);
  const navigate = useNavigate();

  // functions
  const toSearch = (e) => {
    e.preventDefault();
    navigate(`/${input}`);

    setInput("");
  };

  return {
    input,
    setInput,
    toSearch,
  };
}
