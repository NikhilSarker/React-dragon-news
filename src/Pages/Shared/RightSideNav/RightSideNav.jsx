import { BsGoogle,BsGithub } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl pb-6">Login with</h2>
       
          <button className="w-full py-2  border-2 border-solid border-[#403F3F]  rounded-lg  flex items-center justify-center gap-2 text-center">
            <BsGoogle></BsGoogle>Login with Google
          </button>
          <button className=" mt-3 py-2 w-full border-2 border-solid border-[#403F3F]  rounded-lg  flex items-center justify-center gap-2 text-center">
            <BsGithub></BsGithub>Login with Github
          </button>
      

      </div>
      <div>
        <h2 className="text-xl text-[#403F3F] font-semibold">Find Us On</h2>       
          <a className="w-full py-2   border-[#706F6F]  border rounded-t-lg  flex items-center pl-4 gap-2 text-base font-medium text-center">
            <span className="text-[#3b5998]"><FaFacebookF></FaFacebookF></span>facebook
          </a>
          <a className="w-full py-2  border-x border-[#706F6F]    flex items-center pl-4 gap-2 text-base font-medium  text-center">
            <span className="text-[#1DA1F2]"><FaTwitter></FaTwitter></span> twitter
          </a>
          <a className="w-full py-2  border rounded-b-lg  border-[#706F6F]   flex items-center pl-4 gap-2 text-base font-medium  text-center">
            <span className="text-red-400"><FaInstagram></FaInstagram></span>instagram
          </a>           
      </div>
      {/* q-zone */}
      <div className="bg-[#F3F3F3]">
        <h2 className="text-2xl pb-6">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
       
        
      

      </div>
    </div>
  );
};

export default RightSideNav;
