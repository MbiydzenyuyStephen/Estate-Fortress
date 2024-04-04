import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./properties.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../propertyCard/PropertyCard";
import useProperties from "../../hooks/UseProperties";
import { PuffLoader } from "react-spinners";

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

  const {data, isError, isLoading} = useProperties();

  if(isError){
    return(
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
    )
}

if(isLoading){
    <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader 
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
    </div>
} 

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
          {data && data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Properties;
