import React, { useState } from "react";
import UploadCSS from "../UploadStuff/Upload.module.css";
import UploadGoAway from "../UploadStuff/UploadGoAway";
import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  // Define the food options
  const foodOptions = [
    "Plant-Based Meatballs w/ Orange Sauce",
    "Garlic Lemon Herb Chicken",
    "Beef Barbacoa w/ Pico",
    "Tofu Stir-Fry",
    "Mac & Cheese",
    "Kung Pao Chicken",
    "Corn on The Cob",
    "BBQ Chicken Thighs",
    "Tilapia w/ Curry Sauce",
    "Paneer Jalfrezi",
  ];

  return (
    <div className={UploadCSS["upload-page"]}>
      <header className={HomeCSS["home-header"]}>
        <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          TRACK RICE
        </h2>
        <FiMenu className={HomeCSS["menu-icon"]} />
      </header>
      <AiFillCloseSquare
        className={UploadCSS["x-btn"]}
        onClick={() => navigate("/meals-page")}
      />
      <div
        className={`${UploadCSS["UploadAdd"]} ${
          !confirmed ? UploadCSS["centered-container"] : ""
        }`}
      >
  
        <div className={UploadCSS["upload-content-container"]}>
          {confirmed && (
            <div className={UploadCSS["food-options-container"]}>
              {/* Conditionally render the food options */}
              <div className={UploadCSS["food-options"]}>
                <h3>Food Options for Today:</h3>
                <ul className={UploadCSS["food-options-list"]}>
                  {foodOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className={UploadCSS["UploadImgContainer"]}>
            {!file && !confirmed && <UploadGoAway setFile={setFile} />}
            {file && !confirmed && (
              <img className={UploadCSS["UploadImage"]} src={file} alt="Uploaded" />
            )}
            {confirmed && (
  <div className={UploadCSS["confirmed-content"]}>
    <img
      className={UploadCSS["UploadImage"]}
      src="../images/Drawing-4.sketchpad.png"
      alt="Confirmed"
    />
  </div>
)}
          </div>
        </div>
        {!confirmed && (
          <button
            onClick={handleConfirm}
            className={`${UploadCSS["confirm-button"]} ${UploadCSS["custom-button"]}`}
          >
            Confirm
          </button>
        )}
      </div>
      {!confirmed && (
        <button
          onClick={() => navigate("/manual-add")}
          className={UploadCSS["add-manually"]}
        >
          Or add items manually
        </button>
      )}
    </div>
  );
};

export default Upload;
