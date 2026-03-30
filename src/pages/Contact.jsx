import React, { useEffect, useState } from "react";

import * as images from "../assets/images";
import "./Contact.css";

function Contact(){
    const [selected, setSelected] = useState("문의 내용 선택");
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [errors, setErrors] = useState({});

    const menu = [
        "광고 및 행사 섭외",
        "크리에이터 지원",
        "프로그램 제작",
        "채용"
    ];
    
    const handleSubmit = () => {
        let newErrors = {};

        if (!name) newErrors.name = true;
        if (!email) newErrors.email = true;
        if (!phone) newErrors.phone = true;
        if (!text) newErrors.message = true;

        setErrors(newErrors);
    };
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".page-name").classList.add("show");
        }, 100);
        document.body.classList.remove("program-page", "form-open", "creators");
        document.body.classList.add("contact");

        return () => {
            document.body.classList.remove("contact");
            document.body.classList.remove("form-open");
            };
        }, []);

    useEffect(() => {
        if (selected !== "문의 내용 선택") {
            document.body.classList.add("form-open");
        } else {
            document.body.classList.remove("form-open");
        }
    }, [selected]);

    return(
        <section className="contact-page">
            <p className="page-name">CONTACT</p>
            <div className="contact-cont">
                <div className="first-section">
                    <p>블랙페이퍼와 함께 흰 종이를</p>
                    <p>채워나갈 분들의 연락을 기다립니다.</p>
                    <p className="second-cont">크리에이터 지원, 광고 및 행사 섭외,</p>
                    <p className="third-cont">프로그램 제작 등 협업 문의를 환영합니다.</p>
                    <img src={images.hand} alt="hand" />
                </div>
                <div className="second-section">
                    <div className={`select-wrap ${open ? "open" : ""}`}>
                        <div className="dropdown">
                            <div 
                                className="accodian"
                                onClick={() => setOpen(!open)}
                            >
                                {selected}
                            </div>

                            <div className={`form-wrap ${selected !== "문의 내용 선택" ? "on" : ""}`}>
                                {open && (
                                <ul className="menu">
                                    {menu.map((item, i) => (
                                        <li 
                                            key={i}
                                            onClick={() => {
                                                setSelected(item);
                                                setOpen(false);
                                            }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                )}
                                <div className={`form ${selected !== "문의 내용 선택" ? "showPage" : ""}`}>
                                    <div className="name">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setErrors(prev => ({ ...prev, name: false }));
                                            }}
                                        />
                                        <p>이름*</p>

                                        {errors.name && !name && (
                                            <span className="error">필수 기입 항목입니다</span>
                                        )}
                                    </div>
                                    <div className="company">
                                        <div className="company-name">
                                            <input type="text" />
                                            <p>회사</p>
                                        </div>
                                        <div className="part-name">
                                            <input type="text" />
                                            <p>부서</p>
                                        </div>
                                    </div>
                                    <div className="email">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setErrors(prev => ({ ...prev, email: false }));
                                            }}
                                        />
                                        <p>이메일*</p>

                                        {errors.email && !email && (
                                            <span className="error">필수 기입 항목입니다</span>
                                        )}
                                    </div>
                                    <div className="phone">
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                                setErrors(prev => ({ ...prev, phone: false }));
                                            }}
                                        />
                                        <p>연락처*</p>

                                        {errors.phone && !phone && (
                                            <span className="error">필수 기입 항목입니다</span>
                                        )}
                                    </div>
                                    <div className="message">
                                        <p className="label">문의 내용*</p>

                                        <textarea
                                            value={text}
                                            onChange={(e) => {
                                                setText(e.target.value);
                                                setErrors(prev => ({ ...prev, message: false }));
                                            }}
                                            maxLength={300}
                                        />

                                        <p className="count">{text.length}/300</p>

                                        {errors.message && !text && (
                                            <span className="error">필수 기입 항목입니다</span>
                                        )}
                                    </div>
                                    <div className="file-wrap">
                                        <div className="file-cont">
                                            <p className="file-txt">
                                                {file ? file.name : "첨부파일"}
                                            </p>
                                            <input 
                                                type="file" 
                                                id="form-file" 
                                                style={{ display: "none" }}
                                                onChange={(e) => {
                                                    setFile(e.target.files[0]);
                                                }}
                                            />
                                            <div className="file-actions">
                                                {file && (
                                                    <button 
                                                        type="button"
                                                        className="remove"
                                                        onClick={() => setFile(null)}
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <label htmlFor="form-file" className="file-button">
                                            +
                                        </label>
                                    </div>
                                    <div className="send" onClick={handleSubmit}>
                                        <p>SEND</p>
                                        <img src={images.sendBtn} alt="sendbtn" className="btn" />
                                        <img src={images.hoverSendBtn} alt="hoversendbtn" className="hoverbtn" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;