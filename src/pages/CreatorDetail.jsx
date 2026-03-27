import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { creators } from "../data/creators";

import * as images from "../assets/images";
import "./CreatorDetail.css";

function CreatorDetail(){
    const { id } = useParams();
    const creator = creators.find(
        (item) => item.id === Number(id)
    );
    if (!creator) return <div>데이터 없음</div>;
    const categoryMap = {
        main: "대표작",
        writer: "기획 / 집필",
        stage: "공연",
        book: "도서",
        producer: "연출",
        create: "제작",
        record: "촬영"
    };

    useEffect(()=>{
        // const insta = creator.sns?.find(item => item.type === "insta");
        // const youtube = creator.sns?.find(item => item.type === "youtube");
        // const thread = creator.sns?.find(item => item.type === "thread");
        // const x = creator.sns?.find(item => item.type === "x");
        const timer = setTimeout(() => {
            document.querySelector(".page-name")?.classList.add("show");
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <section className="creator-detail">
            <p className="page-name">CREATOR</p>
            <div className="card-detail">
                <div className="first-section">
                    <div className="name">
                        <p className="eng-name">{creator.engName}</p>
                        <p className="kor-name">{creator.korName}</p>
                    </div>
                    <div className="sns">
                        {creator.sns?.map((item) => (
                            <a key={item.type} href={item.url} target="_blank">
                                <img src={images[item.type]} alt={item.type} 
                                className={item.type}
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="second-section">
                    {creator.img?.map((img, index) => (
                        <img 
                            key={index}
                            src={img} 
                            alt={`profile-${index}`} 
                            className="profile-img"
                        />
                    ))}
                </div>
                <div className="third-section">
                    {Object.entries(categoryMap).map(([key, label]) => {
                        const data = creator[key];

                        if (!data) return null; 

                        return (
                            <div className="career-block" key={key}>
                                <p className="career-title">{label}</p>

                                {data.map((item, index) => (
                                    <div className="career-item" key={index}>
                                        <p className="year">{item.year}</p>
                                        <p className="desc">
                                            {item.program || item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link to="/creator" className="backIcon">
                <img src={images.backtopage} alt="backtopage" />
                <p className="backto">BACK TO CREATOR</p>
            </Link>
        </section>
    );
}

export default CreatorDetail;