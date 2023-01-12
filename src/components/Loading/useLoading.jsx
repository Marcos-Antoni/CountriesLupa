import { useState } from "react";
// import {} from "react-router-dom";

export default function useLoading(text) {
  // use
  const [arrayText] = useState(text.split(""));

  // function
  const handleReturn = () => {
    console.log("history");
  };

  return {
    arrayText,
    handleReturn,
  };
}
