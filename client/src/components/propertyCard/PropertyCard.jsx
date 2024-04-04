import React from "react";
import {AiFillHeart} from 'react-icons/ai';
import './propertycard.css';
import {truncate} from 'lodash';
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={() => navigate(`/properties/${card.id}`)}
    >
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span>{card.price}</span>
        <span style={{ color: "orange" }}>MFCFA</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;