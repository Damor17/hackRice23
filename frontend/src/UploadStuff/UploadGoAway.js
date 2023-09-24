import UploadCSS from "../UploadStuff/Upload.module.css";

const UploadGoAway = ({ setFile }) => {
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className={UploadCSS["upload-away"]}>
            <img className={UploadCSS["cloche-icon"]} src="./images/default_foods.png" alt="cloche"/>
            <h2 className={UploadCSS["UploadHeaderText"]}>Upload Your Plate or a Nutrition Label</h2>
            <input className={UploadCSS["file-upload"]} type="file" onChange={handleChange} />
        </div>
    );
}

export default UploadGoAway;