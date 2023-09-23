import { useState } from "react";

const  ManualAdd= ({type, amount}) => {

    const [inputValue, setInputValue] = useState('');

 
    function handleInputChange(item) {
        if (item == 'Food Name') {
            initialForm.egg = item
        }
        console.log(initialForm)
  };

    const initialForm = {
        egg: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20}

    }

    const blanks = ['Food Name', 'Grams', 'Carbs', 'Protein', 'Fat', 'Calories']

    const [form, setForm] = useState(initialForm)



    return (
      <div className="ManualAdd">
        <div className="ManualAdd2">
            {blanks.map((item, index) => (
                <div className="formItem" key={index}>
                    <label htmlFor="text-input">{item}:</label>
                    <input
                            type="text"
                            id="text-input"
                            value={inputValue}
                            onChange={() => handleInputChange(item)}
                    />
                    <p>{inputValue}</p>
                </div>
                ))}
            


        </div>
      </div>
    );
  }
   
  export default ManualAdd;