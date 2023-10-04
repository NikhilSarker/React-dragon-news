import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
  const news = useLoaderData();
  return (
    <div className="max-w-6xl m-auto ">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {/* Right side nab */}
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Dragon News Home</h3>
          {
            news.map((aNews, index)=><NewsCard key={index} news={aNews}></NewsCard>)
          }
        </div>
        {/* Left side nab */}
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      
    </div>
  );
};

export default Home;