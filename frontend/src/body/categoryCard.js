import ItemInCard from "./itemInCard"

const CategoryCard = ({item, data, setData}) => {

    const foodData = data[item].food
    const listFood = Object.entries(foodData)
    const newNutriFood = {
        Carbs: 0,
        Protein: 0,
        Fat: 0,
    }

    let calories = 0


    const name = item

    for (item in Object.entries(foodData)) {
        const food = listFood[item]
        const foodInfo = food[1]
        const foodKeys = (Object.entries(foodInfo))
        for (item in foodKeys) {
            if (foodKeys[item][0] == 'Carbs') {
                newNutriFood['Carbs'] += foodKeys[item][1]

            }
            if (foodKeys[item][0]== 'Protein') {
                newNutriFood['Protein'] += foodKeys[item][1]

            }
            if (foodKeys[item][0] == 'Fat') {
                newNutriFood['Fat'] += foodKeys[item][1]

            }
            console.log(foodKeys[item][0] )
            if (foodKeys[item][0] == 'Calories') {
                calories += foodKeys[item][1]

            }
            
        }
    }

    const newNutriFoodData = (Object.entries(newNutriFood))



    return (
        <div className="catCard">
            <div className="catHeader">
                <p className="catHeaderText">{name}</p>
                <p className="catHeaderTextCalories"> {calories} Calories</p>
            </div>
            <div>
                <div>
                    ----
                </div>
                <img>
                </img>
                <div>
                    
                </div>

            </div>
             <div className='catBody'>
                {newNutriFoodData.map((item, index) => (

                    <ItemInCard key={index} type={item[0]} amount={item[1]} />
                    ))}

        
             </div>
             <div className="catCardFooter">
                <p className="catCardFooterText">See more Details...</p>
             </div>
        </div>
    );
  }
   
  export default CategoryCard;