import Header from "./HeaderStuff/Header.js";
import Body from "./body/body";
import { useState } from "react";

function App() {
  const initialData = {
    BREAKFEAST: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20,  },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20 },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }
      }
      ,
      nFacts : {
        Carbs : 10,
        Protein: 80,
        Fat: 65,
      }

    },

    LUNCH: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20},
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20, Calories: 20  },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }
      },
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },
    DINNER: {
      food: {
        eggs : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        nuts: {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 }}
      ,
      nFacts : {
        Carbs : '10',
        Protein: '80',
        Fat: '65',
      }

    },
    SNACKS: {
      food: {
        eggs : {grams: 100, Carbs: 100, Protein:80, Fat: 20 , Calories: 300 },
        bread : {grams: 10, Carbs: 10, Protein:80, Fat: 20 , Calories: 20 },
        nuts: {grams: 30, Carbs: 30, Protein:80, Fat: 20 , Calories: 20 }
      },
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
