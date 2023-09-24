import { useState } from "react";
import UploadCSS from "../UploadStuff/Upload.module.css"
import UploadGoAway from "../UploadStuff/UploadGoAway";
import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState()
  
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
      </div>
      <button className={UploadCSS["add-manually"]}>or add items manually</button>
    </div>
  );
}
 
export default Upload;