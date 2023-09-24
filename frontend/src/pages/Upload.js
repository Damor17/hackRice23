import { useState } from "react";
import {AiFillCaretDown} from 'react-icons/ai'
import UploadCSS from "../UploadStuff/Upload.module.css"

const Upload = () => {
  const [file, setFile] = useState()

  function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={UploadCSS["UploadAdd"]}>
      <input type="file" onChange={handleChange} />
      <div className={UploadCSS["UploadImgContainer"]}>
        {!file && <h2 className={UploadCSS["UploadHeaderText"]}>Upload Your Plate or a Nutrition Label</h2>}
        {file && <img className={UploadCSS["UploadImage"]} src={file} />}
      </div>
    </div>
  );
}
 
export default Upload;