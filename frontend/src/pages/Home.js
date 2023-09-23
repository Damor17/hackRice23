import HomeCSS from "../Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={HomeCSS["home-page"]}>
      <div>
        <p>personal calorie tracker</p>
        <h1>TRACK RICE</h1>
        <button onClick={() => navigate("/upload")}>your plates</button>
      </div>
    </div>
  );
}
 
export default Home;