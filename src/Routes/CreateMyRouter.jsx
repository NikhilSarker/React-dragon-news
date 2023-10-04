import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const CreateMyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/news.json')
      },
      {
        path:'/newsDetails/:id',
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/career',
        element:<Career></Career>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

export default CreateMyRouter;
