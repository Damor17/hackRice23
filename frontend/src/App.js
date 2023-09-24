import { useEffect, useState } from "react";
import MealsPage from "./pages/MealsPage.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Graphs from "./pages/Graphs.js";
import Upload from "./pages/Upload.js";
import ManualAdd from "./body/manualAdd.js";

function App() {
  const [mealData, setMealData] = useState([]);
  const API_URL = "http://localhost:3500/days";

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error;
        const meals = await response.json();
        setMealData(meals);
      } catch {
        console.log("Error fetching data");
      }
    }

    fetchMealData();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/meals-page" element={<MealsPage mealData={mealData} setMealData={setMealData} />}/>
        <Route path="/graphs" element={<Graphs />}/>
        <Route path="/upload" element={<Upload />} />
        <Route path="/manual-add" element={<ManualAdd />} />
      </Routes>
    </div>
  );
}

export default App;
