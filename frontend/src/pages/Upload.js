import { useState } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {AiFillCaretDown} from 'react-icons/ai'
>>>>>>> 333c3eb (changing buttons)
import UploadCSS from "../UploadStuff/Upload.module.css"
import UploadGoAway from "../UploadStuff/UploadGoAway";
import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Upload = () => {
  const navigate = useNavigate();
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
>>>>>>> 1eb7d38 (changing buttons)

  function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={UploadCSS["upload-page"]}>
      <header className={HomeCSS["home-header"]}>
        <h2 style={{cursor: "pointer"}} onClick={() => navigate("/")}>TRACK RICE</h2>
        <FiMenu className={HomeCSS["menu-icon"]} />
      </header>
      <div className={UploadCSS["UploadAdd"]}>
        <div className={UploadCSS["UploadImgContainer"]}>
          {!file && <UploadGoAway setFile={setFile} />}
          {file && <img className={UploadCSS["UploadImage"]} src={file} />}
        </div>
        <button onClick={() => navigate("/manual-add")} className={UploadCSS["add-manually"]}>Or add items manually</button>
      </div>
    </div>
  );
}
 
export default Upload;