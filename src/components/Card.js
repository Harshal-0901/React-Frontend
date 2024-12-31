import React from 'react';
import './Card.css';

const Card = ({ title, value, subtitle, subtitleColor, color }) => {
  return (
    <div className={`card ${color}`} >
      <h3>{title}</h3>
      <p>{value}</p>
      <span style={{ color: subtitleColor }}>{subtitle}</span>
    </div>
  );
};

export default Card;
