import React, { useEffect } from "react";
import * as images from "../assets/images";

function Home(){
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.className = "custom-cursor";
        document.body.appendChild(cursor);

        const move = (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursor.style.transform = `translate(${x}px, ${y}px)`;
        };

        document.addEventListener("mousemove", move);

        return () => {
            document.removeEventListener("mousemove", move);
            cursor.remove();
        };
    }, []);

    return(
    <section className="home-page">
        <img src={images.bigTxt} alt="bigTxt" className="bigTxt" />
    </section>
    );
}

export default Home;