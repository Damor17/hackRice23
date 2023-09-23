import CategoryCard from "./categoryCard";
import { useState } from "react";
import AddFoodModal from "./addFoodModal";
import ManualAdd from "./manualAdd";
import UploadAdd from "./uploadAdd";

const Body = ({data, setData}) => {

  const [isModal, setIsModal] = useState(false)

  const [isManual, setIsManual] = useState(false)

  const [isUpload, setIsUpload] = useState(false)




  let categories = ['BREAKFEAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <>
        {isModal ? (
          <AddFoodModal isModal={isModal} setIsModal= {setIsModal} isManual={isManual} setIsManual= {setIsManual} isUpload= {isUpload} setIsUpload= {setIsUpload} />
        ): isManual ? (
          <ManualAdd isManual={isManual} setIsManual= {setIsManual}/>
          

        ): isUpload ? (
          <UploadAdd isUpload= {isUpload} setIsUpload= {setIsUpload} />

        ) : (
          <div className="divbody">
              {categories.map((item, index) => (
                <CategoryCard key={index} item={item} data={data} setData={setData} isModal={isModal} setIsModal= {setIsModal} />
                ))}
          </div>

        )
        
        }
      </>
    
    );
  }
   
  export default Body;