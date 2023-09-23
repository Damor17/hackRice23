import { useState } from "react";
import Upload from "./pages/Upload.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  const initialData = {
    BREAKFEAST: {
      food: ['eggs', 'doubleoats'],
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },

    LUNCH: {
      food: ['eggs', 'doubleoats'],
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },
    DINNER: {
      food: ['eggs', 'doubleoats'],
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },
    SNACKS: {
      food: ['eggs', 'doubleoats'],
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },
  }

  const [data, setData] = useState(initialData)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/upload" element={<Upload data={data} setData={setData} />}/>
      </Routes>
    </div>
  );
}

export default App;
