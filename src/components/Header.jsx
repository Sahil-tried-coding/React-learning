import img from "../../Assets/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
import {useState} from "react"
import { Link } from "react-router-dom";
const Header = () => {
  const [btn,setBtn] = useState("log-in")
  return (
    <div className="header">
      <div className="container">
        <img className="app-logo" src={img} />

        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
        </ul>
        <button className="btn" onClick={()=>{
                if(btn==="log-in"?setBtn("log-out"):setBtn("log-in"));
        }}>
          
          {btn}
        </button>
      </div>
    </div>
  );
};
export default Header;
