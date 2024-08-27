import { useEffect, useState } from "react";
import Shimmar from "./Shimmar";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/links";

const MenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  let {resId} = useParams()

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      Menu_URL + resId
    );

    const respones = await data.json();
    console.log(respones);
    setResInfo(respones?.data);
  };
  if (resInfo === null) {
    return <Shimmar />;
  }

  const { name, cuisines, avgRating, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <div className="flex flex-col bg-gray-100 mx-auto w-[350px] gap-2">
        <h1 className=" font-semibold bg-white text-3xl font-sans">{name}</h1>
        <span className="flex font-semibold gap-16">
          <h3>⭐{avgRating}</h3>
          <h3>{costForTwoMessage}</h3>
        </span>
        <h3 className="text-purple-600 font-semibold">{cuisines.join(", ")}</h3>
      </div>
      <div className="w-[40%] mx-auto ">
      {itemCards.map((item) => (
        <li key={item?.card?.info.id} className="border-2 border-black p-2 my-10 hover:shadow-xl">
          <b>{item?.card?.info.name}</b>
          <br />
          Rs.{item?.card?.info.price / 100}
          <br />
          {item?.card?.info.ratings.aggregatedRating.rating
            ? "⭐" + item?.card?.info.ratings.aggregatedRating.rating
            : ""}
          <br />
          {item?.card?.info.description}
        </li>
      ))}
      </div>
    </div>
  );
};
export default MenuCard;

// "FOOD_CATALOG/IMAGES/CMS/2024/3/15/b943fe56-212d-4366-a085-4e24d3532b30_3776df33-e18d-46c9-a566-c697897f1d16.png"

// "FOOD_CATALOG/IMAGES/CMS/2024/6/22/c1025d50-f8c5-45d7-8ff4-3fcf1a0f88b4_3df83c0f-de2c-4e32-aed1-a7fb7ad9237b.png"
