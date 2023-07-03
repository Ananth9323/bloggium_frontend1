import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://bloggium1.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          {/* <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li> */}
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>


              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

/*"data:image/jpeg;base64,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" */
