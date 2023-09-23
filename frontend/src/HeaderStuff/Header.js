import { useNavigate } from "react-router-dom";
import Circle from "./Circle";
import HeaderCSS from "./Header.module.css"

// COMPLETED

const Header = () => {
  const navigate = useNavigate();

  const carbGrams = 0;
  const proteinGrams = 0;
  const fatGrams = 0;

  return (
    <header className={HeaderCSS["upload-header"]}>
      <h2 onClick={() => {navigate("/")}} className={HeaderCSS["cal-tracker-txt"]}>CAL TRACKER</h2>

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