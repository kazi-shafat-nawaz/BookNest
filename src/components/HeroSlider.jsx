import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required CSS
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* padding top to avoid navbar overlap */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={800}
      >
        <div>
          <img
            src="/images/hotel1.jpg"
            alt="Slide 1"
            className="h-[500px] w-full object-cover"
          />
          {/* <p className="legend">Your Dream Vacation</p> */}
        </div>
        <div>
          <img
            src="/images/hotel2.jpg"
            alt="Slide 2"
            className="h-[500px] w-full object-cover"
          />
          {/* <p className="legend">Luxury Hotels</p> */}
        </div>
        <div>
          <img
            src="/images/hotel3.jpg"
            alt="Slide 3"
            className="h-[500px] w-full object-cover"
          />
          {/* <p className="legend">Book Easily</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
