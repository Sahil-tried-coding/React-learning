import { Base_img_URL } from "../utils/links";
const ResCard = ({hotelData}) =>{

    const {name,cuisines,avgRatingString,cloudinaryImageId,locality,id} = hotelData?.info
      return(
          <div>
              <div className="card">
                  <img className="card-img" src={Base_img_URL+cloudinaryImageId}/>
                  <h3 className="heading">{name}</h3>
                  <h3 className="heading">{id}</h3>
                  <div className="rating-area">
                  <h4>⭐{avgRatingString} </h4>
                  <span><h4>{locality} </h4></span>
                  </div>
                  <h4 className="cuisines">{cuisines}</h4>
              </div>
          </div>
      )
  }

export default ResCard;