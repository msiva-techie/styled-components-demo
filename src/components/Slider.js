import React, { useEffect, useState } from "react";
import { SliderStyles } from "./styles/SliderStyles";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
      if (n > slides.length) {
        n = 1;
      }
      if (n < 1) {
        n = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[n - 1].style.display = "grid";
      setSlideIndex(n);
    }
  };

  return (
    <SliderStyles>
      <button className="btnLeft" onClick={() => showSlides(slideIndex - 1)}>
        &#10094;
      </button>
      <div className="mySlides">
        <img src={slide1} />
        <p>
          "Hosting has been so rewarding and life-changing. It’s allowed us to
          pursue our passion for interior design and helped us realise our niche
          – that we really love renovating spaces for others to enjoy."
          <div>
            Catherine,<br></br>
            interior designer and Host in Columbus, Ohio
          </div>
          <div>Get Hosting Tips</div>
        </p>
      </div>
      <div className="mySlides">
        <img src={slide2} />
        <p>
          "Give yourself permission to play. I’ve poured so much love into
          [restoring this space] – and I think guests come back for that very
          reason."
          <div>
            Tiffany,<br></br>
            former creative director and Host in Hollywood Beach, California
          </div>
          <div>Get Hosting Tips</div>
        </p>
      </div>
      <div className="mySlides">
        <img src={slide3} />
        <p>
          "People really appreciate being in a different place. It's a stage; I
          set it up for the visual experience."
          <div>
            Sarah,<br></br>
            graphic designer and Host in Rhinebeck, New York
          </div>
          <div>Get Hosting Tips</div>
        </p>
      </div>
      <button className="btnRight" onClick={() => showSlides(slideIndex + 1)}>
        &#10095;
      </button>
      <div className="currentSlider">
        <span className={`${slideIndex === 1 ? "active" : ""}`}></span>
        <span className={`${slideIndex === 2 ? "active" : ""}`}></span>
        <span className={`${slideIndex === 3 ? "active" : ""}`}></span>
      </div>
    </SliderStyles>
  );
};

export default Slider;
