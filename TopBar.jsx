import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import './topbar.css'
export default function TopBar() {
  const user=false;
  return (
    <div className='top'>
     <div className='topLeft'>
     <i className="topIcon fa-brands fa-facebook"></i>
     <i className="topIcon fa-brands fa-x-twitter"></i>
     <i className="topIcon fa-brands fa-square-instagram"></i>
     <i className="topIcon fa-brands fa-pinterest"></i>
     </div>
     <div className='topCenter'>
        <ul className='topList'>
        <li className='topListItem'>
          <Link className="link" to="/" >HOME</Link>
        </li>
        <li className='topListItem'><Link className="link" to="">ABOUT</Link></li>
        <li className='topListItem'><Link className="link" to="">CONTACT</Link></li>
        <li className='topListItem'><Link className="link" to="/write">WRITE</Link></li>
        <li className='topListItem'><Link className="link" to="">
        {user&&"LOGOUT"}</Link></li>
        </ul>
     </div>
     <div className='topRight'>
     {
      user ?  <img className='topImg'
         src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt='HEHE'>
        </img>
        : (
          <ul className="topList">
          <li className="topListItem">
           <Link className="link" to="/login">LOGIN </Link>
           </li>
          {/* <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li> */}
         </ul>
          )
     }
      
     <img className='topImg'
         src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt='HEHE'>
        </img>
     </div>
    </div>
  )
}
