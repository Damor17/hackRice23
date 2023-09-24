import { useState } from "react";
import UploadCSS from "../UploadStuff/Upload.module.css"
import UploadGoAway from "../UploadStuff/UploadGoAway";
import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState()
  
  return (
    <div className={UploadCSS["upload-page"]}>
      <header className={HomeCSS["home-header"]}>
        <h2 style={{cursor: "pointer"}} onClick={() => navigate("/")}>TRACK RICE</h2>
        <FiMenu className={HomeCSS["menu-icon"]} />
      </header>
      <AiFillCloseSquare className={UploadCSS["x-btn"]} onClick={() => navigate("/meals-page")} />
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