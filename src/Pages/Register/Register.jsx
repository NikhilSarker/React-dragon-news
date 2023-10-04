
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import toast from "react-hot-toast";


const Register = () => {

  const {createUser} = useContext(AuthContext);



  const handleRegister=(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photoURL = form.get('photoURL');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photoURL, email, password);



        // validation 
      //   if (password.length < 6) {
      //     alert('Password must be at least 6 characters');
      //     return;
      // }
    // Create User
    createUser(email,password)
    .then((result) => {
      console.log(result.user)
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
     <h2 className="text-4xl font-semibold text-[#403F3F] text-center pb-12 pt-[75px]">Register your account</h2>
     <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto ">
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="name" name="name"  placeholder="Name" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">PhotoURL</span>
         </label>
         <input type="text" name="photoURL"  placeholder="photoURL" className="input input-bordered"  />
       </div>
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
       
       </div>
       <div className="form-control mt-6 pb-8">
         <button className="btn btn-primary">Register</button>
       </div>
       <p className="pb-[76px] text-center">Already Have An Account? <Link to='/login' className="text-red-500">Login</Link></p>
     </form>
     </div>
     
   </div>
</div>
  );
};

export default Register;