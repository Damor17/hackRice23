import { useState } from "react";
import {AiFillCaretDown} from 'react-icons/ai'


const  UploadAdd= ({isUpload, setIsUpload}) => {

    const [file, setFile] = useState()

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <div className="UploadAdd">
            <div className="UploadAdd2">
                <div className="UploadHeader">
                    <h2 className="UploadHeaderText">Choose Image</h2>
                    <AiFillCaretDown color="white" size={40} onClick={() => setIsUpload(false)}/>
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