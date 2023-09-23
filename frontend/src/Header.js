import { FaFish } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <img className="wheat-icon" src="./images/wheat.png"/>
      <h4 className="carbs-text">CARBS</h4>
      <div className="vertical-break"></div>

      <img className="fish-icon" src="./images/fish.png"/>
      <h4 className="protein-text">PROTEIN</h4>
      <div className="vertical-break"></div>

      <img className="fat-icon" src="./images/fat.png"/>
      <h4 className="fat-text">FAT</h4>
    </header>
  );
}
 
export default Header;