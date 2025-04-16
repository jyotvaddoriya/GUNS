import React from 'react';
import './Guns.css';

/*AR  */
import AK from '../images/AR/AK.jpg';
import AR15 from '../images/AR/AR-15.jpg';
import GPI from '../images/AR/GPI.jpg';
import M4 from '../images/AR/M4.jpg';
import M16 from '../images/AR/M16.jpg';
import M762 from '../images/AR/M762.jpg';
import Scarle from '../images/AR/Scarle.jpg';

/*Sniper */
import AWM from  '../images/Sniper/AWM.jpg';
import KAr98 from '../images/Sniper/Kar98.jpg';
import M24 from '../images/Sniper/M24.jpg'; 
import MUTE from '../images/Sniper/MUTE.jpg';
import TRG from '../images/Sniper/TRG.jpg';
import VSS from '../images/Sniper/VSS.jpg';

/*Pistol */
import A35 from '../images/Pistol/A35.jpg';
import Guw19 from '../images/Pistol/Guw19.jpg';
import P92 from '../images/Pistol/P92.jpg';
import R12 from '../images/Pistol/R12.jpg';
import Roster from '../images/Pistol/Roster.jpg';
import RQ9 from '../images/Pistol/RQ9.jpg';

const gunData = [
  { id: 1, name: "AK-47", price: "$100", image: AK },
  { id: 2, name: "AR15", price: "$150", image: AR15 },
  { id: 3, name: "AK4", price: "$110", image: GPI },
  { id: 4, name: "M416", price: "$200", image: M4 },
  { id: 5, name: "M16", price: "$100", image: M16 },
  { id: 6, name: "M762", price: "$130", image: M762 },
  { id: 7, name: "Scrale", price: "$120", image: Scarle }
];

const sniperData = [
  { id: 1, name: "KAR98K", price: "$100", image: KAr98 },
  { id: 2, name: "M24", price: "$150", image:M24 },
  { id: 3, name: "MUTE", price: "$110", image:MUTE },
  { id: 4, name: "TRG-22", price: "$200",image: TRG },
  { id: 5, name: "VSS", price: "$100",image: VSS },
  { id: 6, name: "AWM", price: "$130",image: AWM }

];

const pistolData = [
  { id: 1, name: "A35", price: "$100", image: A35 },
  { id: 2, name: "Guw19", price: "$150", image:Guw19},
  { id: 3, name: "P92", price: "$110", image:P92 },
  { id: 4, name: "R12", price: "$200", image:R12 },
  { id: 5, name: "Roster", price: "$100", image:Roster },
  { id: 6, name: "RQ9", price: "$130", image: RQ9 }

];

const Guns = () => {
  return (
    <div className="guns-container">
      <h1 className="guns-title">Explore Our Guns</h1>
      <p className="guns-subtitle">This prompt Assault Rifles section</p>

      <div className="slider-wrapper">
        <div className="guns-slider animated-slider">
          {[...gunData, ...gunData].map((gun, index) => (
            <div className="gun-card" key={index}>
              <img src={gun.image} alt={gun.name} className="gun-image" />
              <h2 className="gun-name">{gun.name}</h2>
              <p className="gun-price">{gun.price}</p>
              <button className="gun-btn">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Snipers Section */}
      <h2 className="guns-title">Snipers</h2>
      <div className="slider-wrapper">
        <div className="guns-slider animated-slider">
          {[...sniperData, ...sniperData].map((gun, index) => (
            <div className="gun-card" key={index}>
              <img src={gun.image} alt={gun.name} className="gun-image" />
              <h2 className="gun-name">{gun.name}</h2>
              <p className="gun-price">{gun.price}</p>
              <button className="gun-btn">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Pistols Section */}
      <h2 className="guns-title">Pistols</h2>
      <div className="slider-wrapper">
        <div className="guns-slider animated-slider">
          {[...pistolData, ...pistolData].map((gun, index) => (
            <div className="gun-card" key={index}>
              <img src={gun.image} alt={gun.name} className="gun-image" />
              <h2 className="gun-name">{gun.name}</h2>
              <p className="gun-price">{gun.price}</p>
              <button className="gun-btn">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guns;
