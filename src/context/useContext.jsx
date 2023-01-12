import { createContext, useState } from "react";

//context
export const Context = createContext();

export default function Data({ children }) {
  const [input, setInput] = useState("");

  const head = (title, image) => {
    const link =
      document.querySelector("link[rel*='icon']") || document.createElement("link");

    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = image;
    document.getElementsByTagName("head")[0].appendChild(link);

    document.title = title;
  };

  return (
    <Context.Provider value={{ input, setInput, head }}>{children}</Context.Provider>
  );
}
