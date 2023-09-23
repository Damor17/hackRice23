import { useEffect, useState } from "react";
import Upload from "./pages/Upload.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Graphs from "./pages/Graphs.js";

function App() {
  const [mealData, setMealData] = useState([]);
  const API_URL = "http://localhost:3500/meals";

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
        <Route path="/upload" element={<Upload mealData={mealData} setMealData={setMealData} />}/>
        <Route path="/graphs" element={<Graphs />}/>
      </Routes>
    </div>
  );
}

export default App;
