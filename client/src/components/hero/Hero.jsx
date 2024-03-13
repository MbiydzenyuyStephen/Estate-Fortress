import React from "react";
import "./hero.css";
import HeroImage from "/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup/build";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* hero left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover
              <br /> the Best <br />
              Properties in <br />
              your Area
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Enter your location" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={20} end={1000} duration={4} />
                <span className="h-plus">+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={2000} duration={4} />
                <span className="h-plus">+</span>
              </span>
              <span className="secondaryText">Satisfied Clients</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} />
                <span className="h-plus">+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* hero right section */}
        <div className=" flexCenter hero-right">
          <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
            className="image-container">
            <img src={HeroImage} alt="HeroImage" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
