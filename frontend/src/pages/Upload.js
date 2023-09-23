import Footer from "../FooterStuff/Footer";
import Header from "../HeaderStuff/Header";
import Body from "../body/body";

const Upload = ({ mealData, setMealData }) => {
  return (
    <div>
      <Header />
      <Body mealData={mealData} setmealData= {setMealData} />
      <Footer />
    </div>
  );
}
 
export default Upload;