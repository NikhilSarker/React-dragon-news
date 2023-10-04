import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from 'react-hot-toast';


const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email, password);

       // validation 
       if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
    }

    signIn(email,password)
    .then((result) => {
      console.log(result.user)
      // Navigate after login
      navigate(location?.state? location.state:'/')


    })
    .catch((error) => {
      console.log(error)
    })

  }

  return (
 <div className="bg-[#F3F3F3] h-screen">
     <div className="max-w-6xl mx-auto">      
      <Navbar></Navbar>     
      <div className=" bg-white  mt-[100px] mb-[185px] ">
      <h2 className="text-4xl font-semibold text-[#403F3F] text-center pb-12 pt-[75px]">Login your account</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 pb-8">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="pb-[76px] text-center">Do not Have An Account? <Link to='/register' className="text-red-500">Register</Link></p>
      </form>
      </div>
      
    </div>
 </div>
  );
};

export default Login;