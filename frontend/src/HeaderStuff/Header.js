import Circle from "./Circle";
import HeaderCSS from "./Header.module.css"

// COMPLETED

const Header = () => {
  return (
    <header>
      <h2 className={HeaderCSS["cal-tracker-txt"]}>CAL TRACKER</h2>

      <div className={HeaderCSS["right-header"]}>
        <img className={HeaderCSS["wheat-icon"]} src="./images/wheat.png" alt="wheat"/>
        <h4 className={HeaderCSS["carbs-text"]}>CARBS</h4>
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fish-icon"]} src="./images/fish.png" alt="fish"/>
        <h4 className={HeaderCSS["protein-text"]}>PROTEIN</h4>
        <div className={HeaderCSS["vertical-break"]}></div>

        <img className={HeaderCSS["fat-icon"]} src="./images/fat.png" alt="fat"/>
        <h4 className={HeaderCSS["fat-text"]}>FAT</h4>

        <Circle />
      </div>
    </header>
  );
}
 
export default Header;