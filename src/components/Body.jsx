import { Link } from "react-router-dom";
import ResCard from "./Card";
import "../../style.css";
import { useState } from "react";
import { useEffect } from "react";
import Shimmar from "./Shimmar";

const Body = () => {
  const [listRest, setListRest] = useState([]);
  const [tempVar, setTempVar] = useState([]);
  const [shimmar, setShimmar] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function filtering() {
    let filterCard = listRest.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterCard);
    setTempVar(filterCard);
  }

  const fetchData = async () => {
    setShimmar(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const respones = await data.json();
    setListRest(
      respones?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log("this is restList ", listRest);
    setTempVar(respones?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
        console.log("this is tempVar ",tempVar);
        setShimmar(false);
  }
    return (
      <div>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => filtering()}>Search</button>
        </div>
        <div className="content-container">
          {shimmar ? (
            <Shimmar />
          ) : (
            tempVar.map((rest) => <Link to={"/resturant/" + rest?.info.id }><ResCard key={rest.id} hotelData={rest} /></Link>)
          )}
        </div>
      </div>
    );
  };


export default Body;


