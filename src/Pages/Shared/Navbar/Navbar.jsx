import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = ()=>{
    logOut()
    .then((result)=>{
      console.log(result.user);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
          <div className="w-10 rounded-full">
            <img src={userDefaultPicture} alt="user default picture"/>
          </div>
        </label>
        {
          user? 
          <Link to="">
          <button onClick={handleSignOut} className="text-xl font-semibold text-white px-10 py-3 bg-[#403F3F]">
            Sign Out
          </button>
        </Link>
          :
          <Link to="/login">
          <button className="text-xl font-semibold text-white px-10 py-3 bg-[#403F3F]">
            Login
          </button>
        </Link>

        }
       
      </div>
    </div>
  );
};

export default Navbar;
