import CategoryCard from "./categoryCard";
import { useState } from "react";
import AddFoodModal from "./addFoodModal";

const Body = ({mealData, setMealData}) => {
  const [isModal, setIsModal] = useState(false)

  let categories = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <>
        {isModal && <AddFoodModal />}

        <div className="divbody">
          {categories.map((item, index) => (
            <CategoryCard
              key={index}
              item={item}
              mealData={mealData}
              isModal={isModal}
              setIsModal={setIsModal}
            />
          ))}
        </div>
      </>
    
    );
  }
   
  export default Body;