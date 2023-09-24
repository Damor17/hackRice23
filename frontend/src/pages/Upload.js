import { useState } from "react";
import {AiFillCaretDown} from 'react-icons/ai'
import UploadCSS from "../UploadStuff/Upload.module.css"

const Upload = () => {
  const [file, setFile] = useState()

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