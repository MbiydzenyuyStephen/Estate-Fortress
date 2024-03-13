import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./properties.css";
import { sliderSettings } from "../../utils/common";

const Properties = () => {
  const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Discover Extraordinary Homes</span>
          <span className="primaryText">Unveiling Boundless Properties</span>
        </div>
        {/* 
        Swiper component for carousel/slider which spreads out objects in my array
       */}
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* So for each object in the data array, 
        it will render a slide with the image, price, 
      name and details from that object. */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span>{card.price}</span>
                  <span style={{ color: "orange" }}>MFCFA</span>
                </span>

                <span className="primaryText">{card.name}</span>

                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Properties;
