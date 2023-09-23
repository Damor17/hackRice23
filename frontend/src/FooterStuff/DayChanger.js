import FooterCSS from "./Footer.module.css";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DayChanger = ({ dayWeek, setDayWeek, dayDate, setDayDate, month, setMonth}) => {
  const dayWeekDict = {0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed",
    4: "Thu", 5: "Fri", 6: "Sat"
  };
  const monthDict = {0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun",
    6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
  };

  const changeDay = (direction) => {
    if (direction === "back") {
      dayWeek === 0 ? setDayWeek(6) : setDayWeek(dayWeek - 1);
      setDayDate(dayDate - 1);
    } else {
      dayWeek === 6 ? setDayWeek(0) : setDayWeek(dayWeek + 1);
      setDayDate(dayDate + 1);
    }
  }

  return (
    <div className={FooterCSS["day-changer"]}>
      <FaChevronLeft className={FooterCSS["chevron"]} onClick={() => changeDay("back")} />
      <FaCalendarAlt />
      <div>{`${dayWeekDict[dayWeek]}, ${monthDict[month]} ${dayDate}`}</div>
      <FaChevronRight className={FooterCSS["chevron"]} onClick={() => changeDay("forward")}/>
    </div>
  );
}
 
export default DayChanger;