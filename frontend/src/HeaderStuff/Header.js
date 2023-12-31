import { useNavigate } from "react-router-dom";
import Circle from "./Circle";
import HeaderCSS from "./Header.module.css"

const Header = () => {
  const navigate = useNavigate();

  const carbGrams = 198;
  const proteinGrams = 70;
  const fatGrams = 89;

  return (
    <header className={HeaderCSS["upload-header"]}>
      <div className={HeaderCSS["left-header"]}>
        <h2 onClick={() => {navigate("/")}} className={HeaderCSS["cal-tracker-txt"]}>TRACK RICE</h2>
        <div className={HeaderCSS["vertical-break"]}></div>
        <h4 className={HeaderCSS["view-stats-txt"]} onClick={() => navigate("/graphs")}>view more stats</h4>
      </div>

      <div className={HeaderCSS["right-header"]}>
        <img className={HeaderCSS["wheat-icon"]} src="./images/wheat.png" alt="wheat"/>
        <div className={HeaderCSS["carbs"]}>
          <h4 className={HeaderCSS["carbs-text"]}>CARBS</h4>
          <p className={HeaderCSS["grams"]}>{carbGrams}g</p>
        </div> 
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fish-icon"]} src="./images/fish.png" alt="fish"/>
        <div className={HeaderCSS["protein"]}>
          <h4 className={HeaderCSS["protein-text"]}>PROTEIN</h4>
          <p className={HeaderCSS["grams"]}>{proteinGrams}g</p>
        </div>
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fat-icon"]} src="./images/fat.png" alt="fat"/>
        <div className={HeaderCSS["fat"]}>
          <h4 className={HeaderCSS["fat-text"]}>FAT</h4>
          <p className={HeaderCSS["grams"]}>{fatGrams}g</p>
        </div>

        <Circle />
      </div>
    </header>
  );
}
 
export default Header;