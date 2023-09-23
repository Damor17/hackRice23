import { useState } from "react";
import Upload from "./pages/Upload.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Graphs from "./pages/Graphs.js";

function App() {
  const initialData = {
    BREAKFEAST: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20,  },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20 },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }
      }

    },

    LUNCH: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20},
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20  },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }
      }

    },
    DINNER: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }}

    },
    SNACKS: {
      food: {
        eggs : {grams: 100, Carbs: 100, Protein:80, Fat: 20 , Calories: 300 },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        nuts: {grams: 30, Carbs: 30, Protein:80, Fat: 20 , Calories: 20 }
      },
    },
  }

  const [data, setData] = useState(initialData)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/upload" element={<Upload data={data} setData={setData} />}/>
        <Route path="/graphs" element={<Graphs />}/>
      </Routes>
    </div>
  );
}

export default App;
