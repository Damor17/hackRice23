import CategoryCard from "./categoryCard";
import { useState } from "react";
import AddFoodModal from "./addFoodModal";
import ManualAdd from "./manualAdd";
import UploadAdd from "./uploadAdd";


const Body = ({ mealData, setMealData, setIsChanger, dayDate }) => {
  const [isModal, setIsModal] = useState(false)


  const [isManual, setIsManual] = useState(false)

  const [isUpload, setIsUpload] = useState(false)

  let categories = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <div className="body-page">
        {isModal ? (
          <AddFoodModal isModal={isModal} setIsModal= {setIsModal} isManual={isManual} setIsManual= {setIsManual} isUpload= {isUpload} setIsUpload= {setIsUpload} setIsChanger={setIsChanger}/>
        ): isManual ? (
          <ManualAdd isManual={isManual} setIsManual= {setIsManual} setIsChanger={setIsChanger} />
        ): isUpload ? (
          <UploadAdd isUpload= {isUpload} setIsUpload= {setIsUpload} setIsChanger={setIsChanger} />

        ) : (
          <div className="divbody">
              {categories.map((mealType, index) => (
                <CategoryCard
                  key={index}
                  mealType={mealType}
                  mealData={mealData}
                  setMealData={setMealData}
                  isModal={isModal}
                  setIsModal= {setIsModal}
                  setIsChanger={setIsChanger}
                  dayDate={dayDate}
                />
                ))}
          </div>

        )
        
        }
      </div>
    );
  }
   
  export default Body;