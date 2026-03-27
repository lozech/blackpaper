import React from "react";
import * as images from "../assets/images";

function Footer(){
    return(
        <footer>
            <div className="copyright">
                ©BLACKPAPER. 2026 ALL RIGHTS RESERVED.
            </div>
            <div className="sns">
                <p>FOLLOW US</p>
                <a href="https://www.instagram.com/black.paper_official/" target="_blank">
                    <img src={images.insta} alt="insta" />
                </a>
                <a href="https://www.youtube.com/@BLACKPAPER_official" target="_blank">
                    <img src={images.youtube} alt="youtube" />
                </a>
                
            </div>
        </footer>
    );
}

export default Footer;