import { useState } from "react";
import DayChanger from "../FooterStuff/DayChanger";
import Footer from "../FooterStuff/Footer";
import Header from "../HeaderStuff/Header";
import Body from "../body/body";

const Upload = ({ mealData, setMealData }) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const dayOfDate = date.getDate();
  const currMonth = date.getMonth();

  const [dayWeek, setDayWeek] = useState(dayOfWeek);
  const [dayDate, setDayDate] = useState(dayOfDate);
  const [month, setMonth] = useState(currMonth);

  return (
    <div>
      <Header />
      <Body mealData={mealData} setmealData= {setMealData} />
      <DayChanger
        dayWeek={dayWeek}
        setDayWeek={setDayWeek}
        dayDate={dayDate}
        setDayDate={setDayDate}
        month={month}
        setMonth={setMonth}
      />
      <Footer />
    </div>
  );
}
 
export default Upload;