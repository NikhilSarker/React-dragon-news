import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button className="text-xl font-medium text-white py-2 px-6 bg-[#D72050]">
        Latest
      </button>
      <Marquee speed={100} pauseOnHover={true}>
        <Link to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
