import React from "react";
import { Carousel } from "react-responsive-carousel";

//components
import Card from "../Card";
import Loading from "../Loading";

// css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

//hooks
import useCarousel from "./useCarousel";

export default function index() {
  const { arrayContrys } = useCarousel();

  return arrayContrys[0] ? (
    <Carousel className="carousel" showThumbs={false}>
      {arrayContrys.map((array, index) => (
        <section key={index} className="carousel_section">
          {array.map((contry, index) => (
            <Card key={index} contry={contry} />
          ))}
        </section>
      ))}
    </Carousel>
  ) : (
    <Loading text="Cargando..." />
  );
}
