import { AiFillCaretLeft} from "react-icons/ai";

const  AddFoodModal= ({ isModal, setIsModal, isManual, setIsManual, isUpload, setIsUpload, setIsChanger }) => {

    function updateFoodManual () {
        setIsManual(true)
        setIsModal(false)
        setIsUpload(false)
    }

    function updateFoodUpload () {
        setIsUpload(true)
        setIsManual(false)
        setIsModal(false)
    }

    function goBack() {
        setIsManual(false)
        setIsModal(false)
        setIsUpload(false)
        setIsChanger(true);
    }


    return (
        <> 

        <div className="exit">
            <AiFillCaretLeft className="exitIcon" color="white" size={30} onClick={() =>goBack()}/>

        </div>
        
      <div className="addFoodModal">


            <div className="addFoodManual">
                <div className="addFoodImageContainer">
                    <img className="saladImageFr" src="./images/salad.jpg" onClick={() => updateFoodManual()}/>
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
                    <img className="saladImageFr" src="./images/fruits.jpg" onClick={() => updateFoodUpload()}/>
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