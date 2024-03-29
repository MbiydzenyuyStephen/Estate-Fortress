import React from "react";
import {AiFillHeart} from 'react-icons/ai';
import './propertycard.css';
import {truncate} from 'lodash';

const PropertyCard = ({card}) => {
    return (
<div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <AiFillHeart size={24} />
                <span className="secondaryText r-price">
                  <span>{card.price}</span>
                  <span style={{ color: "orange" }}>MFCFA</span>
                </span>
                <span className="primaryText">{truncate(card.title, {length: 15})}</span>
                <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
              </div>

    )
}

export default PropertyCard;