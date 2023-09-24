import { useState } from "react";
import {AiFillCaretDown} from 'react-icons/ai'


const  UploadAdd= ({ isUpload, setIsUpload, setIsChanger }) => {

    const [file, setFile] = useState()

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleBackButton = () => {
        setIsUpload(false);
        setIsChanger(true);
    }

    return (
        <div className="UploadAdd">
            <div className="UploadAdd2">
                <div className="UploadHeader">
                    <h2 className="UploadHeaderText">Choose Image</h2>
                    <AiFillCaretDown className="back-button" color="white" size={40} onClick={handleBackButton}/>
                </div>
               
                <input type="file" onChange={handleChange} />
                <div className="UploadImgContainer">
                    <img className="UploadImage" src={file} />
                </div>
                
            
            </div>
        </div>
    );
  }
   
  export default UploadAdd;