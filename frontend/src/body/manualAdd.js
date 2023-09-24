import { useState } from "react";
import {AiFillCaretLeft} from 'react-icons/ai'

import {AiFillPlusCircle} from "react-icons/ai"

const  ManualAdd= ({ isManual, setIsManual, setIsChanger }) => {
    const initialFormInside = {
        grams: 0, 
        Carbs: 0, 
        Protein:0, 
        Fat: 0 , 
        Calories: 0,
    }

    const handleBackClick = () => {
        setIsManual(false);
        setIsChanger(true);
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
    //ADD TO DATABASE

    setInputValues({});
    setIsManual(false);
  }

    const blanks = ['Food', 'Grams', 'Carbs', 'Protein', 'Fat', 'Calories']

    return (
      <div className="ManualAdd">
        <div>
            <AiFillCaretLeft className="back-button" color="white" size={30} onClick={handleBackClick}/>
        </div>
        <div className="ManualAdd2">
            {blanks.map((item, index) => (
                item == 'Food' ? (
                    <div className="formItem" key={index}>
                        <label htmlFor="text-input" className="labelAdd">{item}:</label>
                        <input
                                type="text"
                                id={index}
                                value={inputValues[item] || ''}
                                onChange={(e) => handleInputChange(item, e.target.value)}
                        />
                    </div>
                ) : <div className="formItem" key={index}>
                        <label htmlFor="numeric-input" className="labelAdd">{item}:</label>
                        <input
                                type="number"
                                id={index}
                                value={inputValues[item] || ''}
                                onChange={(e) => handleInputChange(item, e.target.value)}
                        />
                
                    </div>
                ))}
            <div className="exitModalDiv">
                <AiFillPlusCircle 
                className="addIconManual"
                color="white" size={70}
                onClick={() => addItem()}
                />
            </div>
        </div>
      </div>
    );
  }
   
  export default ManualAdd;