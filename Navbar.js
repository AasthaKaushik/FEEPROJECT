// Navbar.js
import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img className="imagesss" src="https://pbs.twimg.com/profile_images/1133540457/If_400x400.jpg"/></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.icon && <i className={item.icon}></i>}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/login">
                            <button className="z"><i className="fa-solid fa-user"></i></button>
                        </Link>
                    </li>
                    {/* <button>Register</button> */}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
