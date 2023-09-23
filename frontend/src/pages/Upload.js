import Header from "../HeaderStuff/Header";
import Body from "../body/body";

const Upload = ({ data, setData }) => {
  return (
    <div>
      <Header />
      <Body data={data} setData= {setData} />
    </div>
  );
}
 
export default Upload;