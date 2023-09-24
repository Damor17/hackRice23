import ItemInCard from "./itemInCard"
import { IoAddCircleOutline } from "react-icons/io5"

const CategoryCard = ({ mealType, mealData, isModal, setIsModal, setIsChanger, dayDate }) => {
    if (mealData.length === 0) {
        return <div style={{marginTop: "30px"}}>Loading...</div>;
    }

    const date = new Date();
    const today = date.getDate();
    let dayRelative = "today";

    if (today - dayDate === 1) {
        dayRelative = "yesterday";
    } if (today - dayDate === 2) {
        dayRelative = "twoDays"
    }

    const foodData = mealData[dayRelative][mealType].food;
    const listFood = Object.entries(foodData)
    const newNutriFood = {
        Carbs: 0,
        Protein: 0,
        Fat: 0,
    }

    let calories = 0

    for (const foodEntryArr of listFood) {
        const foodInfo = foodEntryArr[1]
        const foodKeys = (Object.entries(foodInfo))
        for (const nutrientArr of foodKeys) {
            if (nutrientArr[0] === 'Carbs') {
                newNutriFood['Carbs'] += nutrientArr[1]
            } if (nutrientArr[0] === 'Protein') {
                newNutriFood['Protein'] += nutrientArr[1]
            } if (nutrientArr[0] === 'Fat') {
                newNutriFood['Fat'] += nutrientArr[1]
            } if (nutrientArr[0] === 'Calories') {
                calories += nutrientArr[1]
            }
        }
    }

    const newNutriFoodData = (Object.entries(newNutriFood))

    function addFood () {
        setIsModal(!isModal)
        setIsChanger(false);
    }

    return (
        <div className="catCard">
            <div className="catHeader">
                <p className="catHeaderText">{mealType}</p>
                <p className="catHeaderTextCalories"> {calories} Calories</p>
            </div>

            <div className='catHeaderButtonDiv'>
                <div className="catHeaderHolders">
                    
                </div>
                <IoAddCircleOutline className="catHeaderButtonImage" onClick={() => addFood()}/>
                <div className="catHeaderHolders">
                    
                </div>
            </div>

            <div className='catBody'>
                {newNutriFoodData.map((item, index) => (

                    <ItemInCard key={index} type={item[0]} amount={item[1]} />
                    ))}
            </div>

            <div className="catCardFooter">
                <p className="catCardFooterText">See more details...</p>
            </div>
        </div>
    );
  }
   
  export default CategoryCard;