
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({news}) => {
  // console.log(news);
  const {_id,title,image_url,details, author} = news;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="flex items-center">
        <div>
          <img className="rounded-full w-12 h-12" src={author.img} alt="" />
        </div>
       <div>
       <p>{author.name}</p>
        <p>{author.published_date}</p>
       </div>
        
      </div>
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
   
    <img  src={image_url} alt="Shoes" className="rounded-xl w-full" />
 
    {
      details.length > 200?
      <p className="text-start">{details.slice(0,200)}<Link className="text-xl font-bold text-blue-500" to={`/newsDetails/${_id}`}>Read More...</Link></p>
      :
      <p>{details}</p>
    }
    
  </div>
</div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;