import CategoryCard from "./categoryCard";
import { useState } from "react";
import AddFoodModal from "./addFoodModal";

const Body = ({data, setData}) => {

  const [isModal, setIsModal] = useState(false)




  let categories = ['BREAKFEAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <>
        {isModal ? (
          <AddFoodModal isModal={isModal} setIsModal= {setIsModal} onClick={() =>setIsModal(!isModal)}/>
        ): (
          <div className="divbody">
              {categories.map((item, index) => (
                <CategoryCard key={index} item={item} data={data} setData={setData} isModal={isModal} setIsModal= {setIsModal} />
                ))}
          </div>

        )}
      </>
    
    );
  }
   
  export default Body;