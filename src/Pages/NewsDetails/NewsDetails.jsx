import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const NewsDetails = () => {

  const {id}=useParams();
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">

      <h3 className="text-2xl">Dragon News</h3>
      <p>{id}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>

      </div>
      
    </div>
  );
};

export default NewsDetails;