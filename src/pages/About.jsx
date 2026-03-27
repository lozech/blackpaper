import React, {useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { historys } from "../data/history";

import * as images from "../assets/images";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);
function About(){
        useEffect(() => {
            setTimeout(() => {
                document.querySelector(".page-name").classList.add("show");
            }, 100);
            gsap.utils.toArray(".fade-up").forEach((el) => {
                gsap.fromTo(
                    el,
                    { y: 10, opacity: 0 },
                    {
                    y: 0,
                    opacity: 1,
                    duration: 0.25,      
                    ease: "power1.out",  
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom", 
                        toggleActions: "play none none none", 
                    },
                    }
                );
                });
        ScrollTrigger.refresh();
        }, []);

    return(
        <section className="about-page">
            <p className="page-name">ABOUT</p>
            <div className="about-wrap">
                <div className="intro fade-up">
                    <div className="intro-tit">
                        <p className="menu-tit">INTRODUCTION</p>
                        <p className="menu-kor">회사 소개</p>
                    </div>
                    <div className="intro-desc">
                        <p><b>블랙페이퍼</b>는 <b>크리에이티브 아티스트</b></p>
                        <p><b>매니지먼트</b>사로서, IP 제작에 탁월한 재능을</p>
                        <p>가진 크리에이터들과 함께 블랙페이퍼만의</p>
                        <p>색깔을 담은 콘텐츠를 제작하고 있습니다.</p>
                    </div>
                </div>
                <div className="history">
                    <div className="history-tit fade-up">
                        <p className="menu-tit">HISTORY</p>
                        <p className="menu-kor">회사 연혁</p>
                    </div>

                    <div className="history-list fade-up">
                        {historys.map((h) => (
                            <div key={h.id} className="history-row fade-up">

                                <div className="year">
                                    {h.year}
                                </div>

                                <div className="history-cont">
                                    {h.item.map((item, idx) => (
                                        <div key={idx}>
                                            <p>{item.main}</p>
                                            <p>{item.cont}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="keyStaff fade-up">
                    <div className="keyStaff-tit">
                        <p className="menu-tit">KEY STAFF</p>
                        <p className="menu-kor">경영진 소개</p>
                    </div>
                    <div className="name-wrap">
                        <p>유규선</p>
                        <p>유병재</p>
                        <p>이상은</p>
                    </div>
                    <div className="staff-cont">
                        <div className="staff1">
                            <div className="first-cont">
                                <p>우리는 가장 <b>원천의 힘</b>인 <b>사람</b>을 다루기로</p>
                                <p>했습니다.</p>
                            </div>
                            <div className="second-cont">
                                <p><b>치열한 콘텐츠 시장 경쟁</b>에서 <b>소자본</b>으로 좋은</p>
                                <p>성과를 낼 수 있는 방법을 고민한 끝에 내린</p>
                                <p>결론은 <b>사과를 사지 않고도 사과를 얻을 수</b></p>
                                <p><b>있도록 사과 나무를 기르는 과수원</b>이</p>
                                <p>되어야겠다는 것이었습니다.</p>
                            </div>
                            <div className="third-cont">
                                <p>우리는 이미 만들어진 좋은 콘텐츠 IP보다, 그</p>
                                <p>콘텐츠를 <b>만들어낸 누군가에 주목</b>했습니다.</p>
                            </div>
                            <div className="forth-cont">
                                <p><b>블랙페이퍼</b>는 <b>크리에이터의 창의적 활동</b>을</p>
                                <p>지원하는 <b>Creative Artist Management</b></p>
                                <p>입니다.</p>
                            </div>
                        </div>
                        <div className="staff2">
                            <div className="first-cont">
                                <p>재능 있는 콘텐츠 창작자들이 <b>'병재 업고 튀어</b></p>
                                <p><b>오를 수 있도록'</b> 그들이 기댈 수 있는 든든한</p>
                                <p>등판이 되겠습니다.</p>
                            </div>
                            <div className="second-cont">
                                <p>더 많은 <b>창의력</b> 있는 인재들이 기량을 더욱 펼칠</p>
                                <p>수 있는 <b>서비스</b>를 제공하기 위해 꾸준히</p>
                                <p>고민하겠습니다.</p>
                            </div>
                        </div>
                        <div className="staff3">
                            <div className="first-cont">
                                <p><b>블랙페이퍼</b>는 재능 있는 크리에이터와 함께</p>
                                <p><b>혁신적인 콘텐츠</b>를 만들고, <b>글로벌 시장</b>까지</p>
                                <p>진출할 수 있는 <b>성공적인 IP 비지니스를</b></p>
                                <p>실현하는 것을 목표로 합니다.</p>
                            </div>
                            <div className="second-cont">
                                <p>재능을 가진 <b>크리에이터</b>가 <b>체계적 매니지먼트</b></p>
                                <p><b>시스템</b>을 통해 역량을 최고로 발휘할 수 있도록</p>
                                <p>언제나 노력하겠습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="top-btn"
            onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <img src={images.topbtn} alt="topbtn" className="topbtn" />
                <p className="top-txt">BACK TO TOP</p>
            </div>
        </section>
    );
}

export default About;