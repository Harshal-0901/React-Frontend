import React from "react";
import "./ReusableCard.css";

const ReusableCard = ({ 
  headerText, 
  count, 
  breakdown, 
  imageSrc, 
  footerText, 
  growthPercentage, 
  growthColor 
}) => {
  return (
    <div className="reusable-card">
      <div className="text-container">
        <div className="card-header">
          <h1>{headerText}</h1>
        </div>
        <h1 className="card-count">{count}</h1>
        <div className="card-breakdown">
          {breakdown.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="graph-container">
        <div className="growth-indicator" style={{ color: growthColor }}>
          <span>{growthPercentage}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1L15 8H1L8 1Z" fill={growthColor} />
          </svg>
        </div>
        <div className="footer">
          <img src={imageSrc} alt="Graph or illustration" style={{marginRight : "-100px"}} />
          <p className="footer-indicator" >{footerText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
