import "./navbar.styles.scss";
import SearchBox from "../Search-Box/search-box.component";
import Notification from "../../assets/Vector.svg";
import ProfilePicture from "../../assets/profilepicture.svg";
import { useState } from "react";

const NavBar = () => {
  const [placeholder, setplaceholder] = useState("Search..");
  return (
    <div className="Navbar">
      <SearchBox placeholder={placeholder} />
      <div className="third-section">
        <img src={Notification} className="Notification-Icon" />
        <img src={ProfilePicture} alt="no dp" className="profile-picture" />
      </div>
    </div>
  );
};

export default NavBar;
