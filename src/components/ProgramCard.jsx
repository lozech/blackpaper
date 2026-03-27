import React from "react";
import { programs } from "../data/programs";

import "./ProgramCard.css";

function ProgramCard(){
    return(
        <section className="program-card">
            <div className="card-container"> 
                {programs.map((program) => (
                    <a key={program.id} href={program.url || "#"} target="_blank" className="card-wrap"
                    onClick={(e) => {
                        if (!program.url) {
                        e.preventDefault();
                        e.stopPropagation();
                        }
                    }}>
                        <div className="card">
                            <img src={program.img} alt="program poster" />
                        </div>
                        <div className="hover-card">
                            <p className="tit">{program.programName}</p>
                            <div className="desc">
                                <div className="tag">
                                    <p>프로그램명:</p>
                                    <p>채널:</p>
                                    <p>장르:</p>
                                    <p>소개:</p>
                                </div>
                                <div className="cont">
                                    <p>{program.programName}</p>
                                    <p>{program.channel}</p>
                                    <p>{program.genre}</p>
                                    <p>{program.desc}</p>
                                </div>
                            </div>
                            {program.url && (
                                <p className="tothe">보러가기</p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default ProgramCard;