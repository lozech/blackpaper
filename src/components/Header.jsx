import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const handleWhite = () => {
        document.body.classList.add("whitePage");
        localStorage.setItem("theme", "white");
    };

    const handleBlack = () => {
        document.body.classList.remove("whitePage");
        localStorage.setItem("theme", "black");
    };

    return (
        <header>
            <h1 className="head-logo">
                <Link to="/" aria-label="home">
                    <span className="logo"></span>
                </Link>
            </h1>
            
        {/* 네비게이션 메뉴 */}
        <nav>
            {/* Link는 SPA 이동 */}
            <Link to="/about">ABOUT</Link>
            <Link to="/program">PROGRAM</Link>
            <Link to="/creator">CREATOR</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
        <div className="toggle">
            <p className="black-toggle" onClick={handleBlack}>BLACK</p>
            <p> / </p>
            <p className="white-toggle" onClick={handleWhite}>WHITE</p>
        </div>
        </header>
    );
}

export default Header;