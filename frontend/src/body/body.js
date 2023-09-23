import CategoryCard from "./categoryCard";
import { useState } from "react";
import AddFoodModal from "./addFoodModal";

const Body = ({mealData, setMealData}) => {
  const [isModal, setIsModal] = useState(false)

  let categories = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <>
        {isModal ? (
          <AddFoodModal isModal={isModal} setIsModal= {setIsModal} onClick={() =>setIsModal(!isModal)}/>
        ): (
          <div className="divbody">
              {categories.map((item, index) => (
                <CategoryCard key={index} item={item} mealData={mealData} setMealData={setMealData} isModal={isModal} setIsModal= {setIsModal} />
                ))}
          </div>

        )}
      </>
    
    );
  }
   
  export default Body;