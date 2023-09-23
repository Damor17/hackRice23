import { AiFillCaretLeft} from "react-icons/ai";

const  AddFoodModal= ({isModal, setIsModal}) => {

    function updateFood () {

    }


    return (
        <>

        <div className="exit">
            <AiFillCaretLeft className="exitIcon" color="white" size={30} onClick={() =>setIsModal(!isModal)}/>

        </div>
        
      <div className="addFoodModal">


            <div className="addFoodManual">
                <div className="addFoodImageContainer">
                    <img className="saladImageFr" src="./images/salad.jpg" onClick={() => updateFood()}/>
                </div>

                <div className="addFoodManualTextDiv">
                    <div className="addFoodManualTextDiv2">
                        <p className="addFoodManualText">
                        Add Manually
                        </p>
                    </div>
                </div>
            
            </div>
            <div className="addFoodUpload">
                <div className="addFoodImageContainer">
                    <img className="saladImageFr" src="./images/fruits.jpg" onClick={() => updateFood()}/>
                </div>

                <div className="addFoodUploadTextDiv">
                    <div className="addFoodManualTextDiv2">
                        <p className="addFoodManualText">
                        Upload
                        </p>
                    </div>
                </div>

            </div>


        
    

      </div>
      </>
    );
  }
   
  export default AddFoodModal;