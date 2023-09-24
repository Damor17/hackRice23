import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Graph1 from '../GraphStuff/Graph1';
import Graph2 from '../GraphStuff/Graph2';
import Header from '../HeaderStuff/Header';
import Circle from "../HeaderStuff/Circle";
import HeaderCSS from "../HeaderStuff/Header.module.css"

import Footer from '../FooterStuff/Footer';
import '../Graphs.css'; // Import the CSS file

const style = {
  fontFamily: 'Open Sans, sans-serif',
};

const Graphs = () => {
  const navigate = useNavigate();

  const carbGrams = 198;
  const proteinGrams = 70;
  const fatGrams = 89;

  const [showGraph2Popup, setShowGraph2Popup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isGraph1Displayed, setIsGraph1Displayed] = useState(true); // Track whether Graph1 is displayed
  const [isDailyView, setIsDailyView] = useState(false); // Track whether it's daily view

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowGraph2Popup(true);
    setIsDailyView(true); // Set to daily view when Graph2 is displayed
  };

  const closeGraph2Popup = () => {
    setShowGraph2Popup(false);
    setIsDailyView(false); // Set back to monthly view when closing Graph2
  };

  const handleToggleGraph = () => {
    setIsGraph1Displayed(!isGraph1Displayed);
    setIsDailyView(false); // Set back to monthly view when switching to Graph1
  };

  return (
    <div className="page-container">
      <header className={HeaderCSS["upload-header"]}>
      <div className={HeaderCSS["left-header"]}>
        <h2 onClick={() => {navigate("/")}} className={HeaderCSS["cal-tracker-txt"]}>TRACK RICE</h2>
        <div className={HeaderCSS["vertical-break"]}></div>
        <h4 className={HeaderCSS["view-stats-txt"]} onClick={() => navigate("/meals-page")}>my meals</h4>
      </div>

      <div className={HeaderCSS["right-header"]}>
        <img className={HeaderCSS["wheat-icon"]} src="./images/wheat.png" alt="wheat"/>
        <div className={HeaderCSS["carbs"]}>
          <h4 className={HeaderCSS["carbs-text"]}>CARBS</h4>
          <p className={HeaderCSS["grams"]}>{carbGrams}g</p>
        </div> 
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fish-icon"]} src="./images/fish.png" alt="fish"/>
        <div className={HeaderCSS["protein"]}>
          <h4 className={HeaderCSS["protein-text"]}>PROTEIN</h4>
          <p className={HeaderCSS["grams"]}>{proteinGrams}g</p>
        </div>
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fat-icon"]} src="./images/fat.png" alt="fat"/>
        <div className={HeaderCSS["fat"]}>
          <h4 className={HeaderCSS["fat-text"]}>FAT</h4>
          <p className={HeaderCSS["grams"]}>{fatGrams}g</p>
        </div>

        <Circle />
      </div>
    </header>
      <div className="banner-header">
        <h1 className="banner-title">
          {isDailyView ? 'DAILY VIEW' : 'MONTHLY VIEW'}
        </h1>
      </div>
      {showGraph2Popup ? (
        <div className="popup">
          <div className="popup-content">
            {/* Apply the back-button class to the button */}
            <button className="back-button" onClick={closeGraph2Popup}></button>
            <Graph2 />
          </div>
        </div>
      ) : isGraph1Displayed ? (
        // Display Graph1 with white background, green outline, and centered
        <div className="graph-container">
          <div className="graph-outline">
            <Graph1 onDayClick={handleDayClick} />
          </div>
        </div>
      ) : (
        // Display Graph2 and handle the toggle to switch to Graph1
        <>
          <Graph1 onDayClick={handleDayClick} />
          <button className="toggle-button" onClick={handleToggleGraph}>
            Switch to Monthly
          </button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Graphs;
