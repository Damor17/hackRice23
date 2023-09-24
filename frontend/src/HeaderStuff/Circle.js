import HeaderCSS from "./Header.module.css"

const Circle = () => {
  const goal = 2000;
  const calCount = 1831;

  const transparentDeg = ((goal - calCount) / goal) * 360;
  const filledDeg = (calCount / goal) * 360;

  return (
    <div
      className={HeaderCSS["cal-circle"]}
      style={{
        background: `conic-gradient(transparent ${transparentDeg}deg, #71966D 0deg, #71966D ${filledDeg}deg)`
      }}
    >
      <p className={HeaderCSS["circle-num-cals"]}>{calCount}</p>
      <p className={HeaderCSS["circle-cals-text"]}>CALS</p>
    </div>
  );
}
 
export default Circle;