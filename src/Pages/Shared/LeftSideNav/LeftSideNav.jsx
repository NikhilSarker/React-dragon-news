import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('categories.json')
    .then(response=>response.json())
    .then(data=>setCategories(data))
  },[]);

  return (
    <div>
      <h2 className="text-2xl">All Categories</h2>    
      {
        categories?.map(category=>
        <Link 
        to={`category/${category.id}`}
        className="block pb-2 pl-8 text-xl font-semibold" 
        key={category.id}
        >{category.name}</Link>)
      }  
    </div>
  );
};

export default LeftSideNav;