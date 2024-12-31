import React from "react";
import "./AnnouncementCard.css";

const Section = ({ title, date, items, footerText }) => {
  return (
    <div className="section-container">
      <div className="section-header">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div className="section-list">
        {items.map((item, index) => (
          <div key={index} className="section-item">
            <div className="section-content">
              <p className="section-title">{item.title}</p>
              <p className="section-time">{item.time}</p>
            </div>
            <div className="section-actions">
              <button className="pin-button">📌</button>
              <button className="more-options">⋮</button>
            </div>
          </div>
        ))}
      </div>
      <div className="section-footer">
        <a href="#footer-link" className="see-all">
          {footerText}
        </a>
      </div>
    </div>
  );
};

export default Section;
