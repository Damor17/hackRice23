import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={HomeCSS["home-page"]}>
      <header className={HomeCSS["home-header"]}>
        <h2>TRACK RICE</h2>
        <FiMenu className={HomeCSS["menu-icon"]} />
      </header>
      <div className={HomeCSS["main-text-container"]}>
      <p className={HomeCSS["personal-calorie-tracker"]}>personal calorie tracker</p>
        <div className={HomeCSS["track-rice"]}>
          <h1 className={HomeCSS["track"]}>TRACK</h1>
          <h1 className={HomeCSS["rice"]}>RICE</h1>
        </div>
        <button className={HomeCSS["your-plates"]}onClick={() => navigate("/upload")}>your plates</button>
        <button onClick={() => navigate("/graphs")}>Stats</button>
      </div>
    </div>
  );
}
 
export default Home;