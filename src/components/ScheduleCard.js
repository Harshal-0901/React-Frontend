import React from "react";
import "./ScheduleCard.css";

const ScheduleCard = () => {
  const schedule = [
    {
      type: "Priority",
      items: [
        {
          title: "Review candidate applications",
          time: "11:30 AM",
        },
      ],
    },
    {
      type: "Other",
      items: [
        {
          title: "Interview with candidates",
          time: "10:30 AM",
        },
        {
          title: "Short meeting with product designer from IT Department",
          time: "09:15 AM",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h2 className="title">Upcoming Schedule</h2>
        <span className="date">Today, 13 Sep 2021</span>
      </header>

      {schedule.map((section) => (
        <div key={section.type} className="section">
          <span className="section-title">{section.type}</span>
          {section.items.map((item, index) => (
            <div key={index} className="card">
              <p className="card-title" style={{fontWeight: 'lighter', fontSize: '18px'}}>{item.title}</p>
              <span className="card-time">{item.time}</span>
            </div>
          ))}
        </div>
      ))}

      <footer className="footer">
        <button className="button">Create a New Schedule</button>
      </footer>
    </div>
  );
};

export default ScheduleCard;