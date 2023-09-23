import CategoryCard from "./categoryCard";

const Body = ({data, setData}) => {

  let categories = ['BREAKFEAST', 'LUNCH', 'DINNER', 'SNACKS']
    return (
      <div className="divbody">
        {categories.map((item, index) => (
          <CategoryCard key={index} item={item} data={data} setData={setData} />
          ))}
      </div>
    );
  }
   
  export default Body;