import React from "react";
import { Link } from "react-router-dom";
import { creators } from "../data/creators";

import "./Creatorcard.css";


function CreatorCard({creator}){
    return(
        <Link to={`/creator/${creator.id}`}>
                <div className="creator-card">
                    <div className="card-container"> 
                        <img src={creator.img[0]} alt="img1" />
                        <div className="hover-card">
                            <p className="eng-name">{creator.engName}</p>
                            <p className="kor-name">{creator.korName}</p>
                        </div>
                    </div>
                </div>
        </Link>
    );
}

export default CreatorCard;