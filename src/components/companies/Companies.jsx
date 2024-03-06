import React from 'react';
import './companies.css';
import Ministry from '/ministry.png';
import YIBS from '/yibs.png';
import Orange from '/orange.png';
import MTN from './mtn.png'

const Companies = () => {
  return (
    <section className="c-wrapper" style={{ backgroundColor: "white" }}>
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Ministry} alt="Ministry of Housing and Urban deployment" />
        <img src={YIBS} alt="Yaounde International School logo" />
        <img srs={MTN} alt="MTN MOMO logo" />
        <img src={Orange} alt=" Orange Mobile Money logo" />
      </div>
    </section>
  );
};

export default Companies;
