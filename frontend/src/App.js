import Header from "./HeaderStuff/Header.js";
import Body from "./body/body";
import { useState } from "react";

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
      <Header />
      <Body data={data} setData= {setData} />
    </div>
  );
}

export default App;
