import React from "react";
import Carousel from "react-bootstrap/Carousel";

import corouselOne from "../assets/images/1.jpg";
import corouselTwo from "../assets/images/2.jpg";
import corouselThree from "../assets/images/3.jpg";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item className="carouselHeight">
        <img className="d-block w-100" src={corouselOne} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselHeight">
        <img className="d-block w-100" src={corouselTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselHeight">
        <img className="d-block w-100" src={corouselThree} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
