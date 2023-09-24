import { useState } from "react";
<<<<<<< HEAD
import {AiFillCaretDown} from 'react-icons/ai'
import UploadCSS from "../UploadStuff/Upload.module.css"

const Upload = () => {
  const [file, setFile] = useState()
=======
import { useNavigate } from "react-router-dom";
import DayChanger from "../FooterStuff/DayChanger";
import Footer from "../FooterStuff/Footer";
import Header from "../HeaderStuff/Header";
import Body from "../body/body";

const Upload = ({ mealData, setMealData }) => {
  const navigate = useNavigate();
  const date = new Date();
  const dayOfWeek = date.getDay();
  const dayOfDate = date.getDate();
  const currMonth = date.getMonth();
>>>>>>> origin/branch3

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