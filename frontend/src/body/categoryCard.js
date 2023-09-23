import ItemInCard from "./itemInCard"

const CategoryCard = ({item, data, setData}) => {

    console.log(data, item)
    const foodData = data[item].food
    const nutriData = Object.entries(data[item].nFacts)
    console.log(nutriData[0][0])


    return (
        <div className="catCard">
            <div className="catHeader">
                <p className="catHeaderText">{item}</p>
            </div>
             <div className='catBody'>
                {nutriData.map((item, index) => (

                    <ItemInCard key={index} type={item[0]} amount={item[1]} />
                    ))}

        
             </div>
        </div>
    );
  }
   
  export default CategoryCard;