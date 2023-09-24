import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";
import UploadCSS from "../UploadStuff/Upload.module.css";

const  ManualAdd= () => {
  const navigate = useNavigate();

  const initialFormInside = {
      grams: 0, 
      Carbs: 0, 
      Protein:0, 
      Fat: 0 , 
      Calories: 0,
  }

  const initialForm = {};

  const [inputValues, setInputValues] = useState({});

  function handleInputChange(fieldName, value) {
      setInputValues({ ...inputValues, [fieldName]: value });
  };

  function addItem() {
    const updatedObject = { ...inputValues };
    let food = updatedObject.Food;
    delete updatedObject[food];
    setInputValues(updatedObject);
    initialForm[food] = inputValues;

    setInputValues({});
  }

  const blanks = ['Food', 'Grams', 'Carbs', 'Protein', 'Fat', 'Calories']

  return (
    <div className="manual-add-page">
      <header className={HomeCSS["home-header"]}>
        <h2 style={{cursor: "pointer"}} onClick={() => navigate("/")}>TRACK RICE</h2>
        <FiMenu className={HomeCSS["menu-icon"]} />
      </header>
      <AiFillCloseSquare className={UploadCSS["x-btn"]} onClick={() => navigate("/meals-page")} />
      <div className="ManualAdd">
        <h2 className="enter-info-txt">Enter Information</h2>
        {blanks.map((item, index) => (
          item == 'Food' ? (
            <div className="formItem" key={index}>
              <label htmlFor="text-input" className="labelAdd">{item}:</label>
              <input
                type="text"
                id={index}
                className="manual-input"
                placeholder={`Enter Food Name`}
                value={inputValues[item] || ''}
                onChange={(e) => handleInputChange(item, e.target.value)}
              />
            </div>
          ) : <div className="formItem" key={index}>
                <label htmlFor="numeric-input" className="labelAdd">{item}:</label>
                <input
                  type="number"
                  id={index}
                  className="manual-input"
                  placeholder={`Enter ${item}`}
                  value={inputValues[item] || ''}
                  onChange={(e) => handleInputChange(item, e.target.value)}
                />
              </div>
        ))}
        <button className="confirm-entry-btn">Confirm Entry</button>
      </div>
    </div>
  );
}
   
  export default ManualAdd;