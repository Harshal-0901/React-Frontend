import React from "react";
import "./ActivityCard.css";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="card-header">Recent Activity</div>
      <div className="card-content">
        <p className="timestamp">10.40 AM, Fri 10 Sept 2021</p>
        <h3 className="activity-title">You Posted a New Job</h3>
        <p className="activity-description">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
      </div>
      <div className="card-footer">
        <p className="activity-summary">Today you makes 12 Activity</p>
        <button className="activity-button">See All Activity</button>
      </div>
    </div>
  );
};

export default ActivityCard;
