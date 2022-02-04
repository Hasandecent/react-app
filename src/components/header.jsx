import react from "react";
import "./header.css"
import Logo from "../images/logo.png"



const Header = () => {
    return (
         <header>
        <div className="page-wrap header">
            <div className="logo">
                <img src={Logo} width="80" alt="" />
            </div>
            <div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    </header>
    )
}
export default Header