import React from "react";
import Card from "./Card";
import AnnouncementCard from "./AnnouncementCard";
import Navbar from "./Navbar";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faUser,
  faCalendarDay,
  faUsers,
  faBuilding,
  faHeadset,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ActivityCard from "./ActivityCard";
import ReusableCard from "./ReusableCard";
import ScheduleCard from "./ScheduleCard";

const Dashboard = () => {
  const announcementItems = [
    { title: "Outing schedule for every department", time: "5 Minutes ago" },
    { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];

  const scheduleItems = [
    { title: "Team Meeting", time: "Tomorrow, 10:00 AM" },
    { title: "Project Deadline", time: "Next Monday, 5:00 PM" },
    { title: "Company Event", time: "Next Friday, 2:00 PM" },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>
          <img src="./logo.png" alt="logo.png" style={{display: 'flex', alignItems: 'center', justifyItems: 'center'}} />
        </h1>
        <nav>
          <ul>
            <span style={{ fontWeight: "lighter" }}>MAIN MENU</span>
            <div className="main-menu">
              <li className="menu-item">
                <FontAwesomeIcon icon={faAddressCard} />
                <span className="menu-text">Dashboard</span>
              </li>
              <li className="menu-item">
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-text">Recruitment</span>
              </li>
              <li className="menu-item">
                <FontAwesomeIcon icon={faCalendarDay} />
                <span className="menu-text">Schedule</span>
              </li>
              <li className="menu-item">
                <FontAwesomeIcon icon={faUsers} />
                <span className="menu-text">Employee</span>
              </li>
              <li className="menu-item">
                <FontAwesomeIcon icon={faBuilding} />
                <span className="menu-text">Department</span>
              </li>
            </div>
            <span style={{ fontWeight: "lighter" }}>OTHER</span>
            <div className="other">
              <li className="menu-item">
                <FontAwesomeIcon icon={faHeadset} />
                <span className="menu-text">Support</span>
              </li>
              <li className="menu-item">
                <FontAwesomeIcon icon={faGear} />
                <span className="menu-text">Settings</span>
              </li>
            </div>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="mainContent">
        <Navbar />
        {/* <h3 style={{ marginTop: "40px", marginBottom: "10px" }}>Dashboard</h3> */}

        <div className="layout">
          {/* Left Section */}
          <div className="leftSection" style={{width: '75%'}}>
            {/* Top Cards */}
            <div className="overview">
              <Card
                title="Available Position"
                value="24"
                subtitle="4 Urgently needed"
                subtitleColor="#FF5151"
                color="orange"
              />
              <Card
                title="Job Open"
                value="10"
                subtitle="4 Active hiring"
                subtitleColor="#3786F1"
                color="blue"
              />
              <Card
                title="New Employees"
                value="24"
                subtitle="4 Departments"
                subtitleColor="#EE61CF"
                color="pink"
              />
            </div>

            {/* Mid Cards */}
            <div className="mid-cards">
              <ReusableCard
                headerText="Total Employees"
                count="216"
                breakdown={["120 Men", "96 Women"]}
                imageSrc="up_graph.png"
                footerText="+2% Past month"
                growthPercentage="+2%"
                growthColor="#ff4c4c"
              />
              <ReusableCard
                headerText="Talent Request"
                count="16"
                breakdown={["6 Men", "10 Women"]}
                imageSrc="up_graph.png"
                footerText="+5% Past Month"
                growthPercentage="+5%"
                growthColor="#ff4c4c"
              />
            </div>

            {/* Announcement Section */}
            <div className="section-div">
              <AnnouncementCard
                title="Announcement"
                date="Today, 13 Sep 2021"
                items={announcementItems}
                footerText="See All Announcements"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="rightSection" style={{width: '30%'}}>
          {/* Top Cards */}
            {/* Activity Card */}
            <div className="activity-card-div">
              <ActivityCard />
            </div>

            {/* Upcoming Schedule */}
            <div className="schedule-card-div">
              <ScheduleCard
                title="Upcoming Schedule"
                date="Today, 13 Sep 2021"
                items={scheduleItems}
                footerText="See All Schedules"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
