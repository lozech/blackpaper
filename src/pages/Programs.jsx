    import React, { useEffect, useRef } from "react";

    import ProgramCard from "../components/ProgramCard";
    import "./Programs.css";

    function Programs(){
        const wrapRef = useRef(null);
        useEffect(() => {
            document.body.classList.remove("contact", "form-open", "creators");
            document.body.classList.add("program-page");
            setTimeout(() => {
                document.querySelector(".page-name").classList.add("show");
            }, 100);
            const cards = document.querySelectorAll(".program-wrap");
            
            cards.forEach((el, idx) => {
                setTimeout(() => {
                    wrapRef.current.classList.add("showPage");
                }, 50);
            });

            const wrap = wrapRef.current;
            if (!wrap) return;
            wrap.addEventListener("dragstart", (e) => {
                e.preventDefault();
            });

            let isDown = false;
            let startX = 0;
            let scrollLeft = 0;
            let isDragging = false;

            let direction = 0;
            const speed = 2;

            const animate = () => {
                if (!isDown && direction !== 0) {
                    wrap.scrollLeft += direction * speed;
                }
                requestAnimationFrame(animate);
            };
            animate();

            const handleMouseDown = (e) => {
                isDown = true;
                isDragging = false;
                startX = e.pageX - wrap.offsetLeft;
                scrollLeft = wrap.scrollLeft;
                direction = 0;
            };

            const handleMouseMoveAll = (e) => {
            if (isDown) {
                e.preventDefault();

                const x = e.pageX - wrap.offsetLeft;
                const walk = x - startX;

                if (Math.abs(walk) > 3) {
                    isDragging = true;
                }

                wrap.scrollLeft = scrollLeft - walk;
                return;
            }

            const { left, width } = wrap.getBoundingClientRect();
            const x = e.clientX - left;
            const percent = x / width;

            if (percent < 0.3) direction = -1;
            else if (percent > 0.7) direction = 1;
            else direction = 0;
        };

            const handleMouseUp = () => {
                isDown = false;

                setTimeout(() => {
                    isDragging = false;
                }, 50);
            };


            const handleHoverMove = (e) => {
                if (isDown) return;

                const { left, width } = wrap.getBoundingClientRect();
                const x = e.clientX - left;
                const percent = x / width;

                if (percent < 0.3) {
                    direction = -1;
                } else if (percent > 0.7) {
                    direction = 1;
                } else {
                    direction = 0;
                }
            };

            const handleLeave = () => {
                direction = 0;
                isDown = false;
            };

            const handleClick = (e) => {
                if (isDragging) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };

            wrap.addEventListener("click", handleClick, true);
            wrap.addEventListener("mousedown", handleMouseDown);
            wrap.addEventListener("mousemove", handleMouseMoveAll);
            wrap.addEventListener("mouseup", handleMouseUp);
            wrap.addEventListener("mouseleave", handleLeave);

            return () => {
                wrap.removeEventListener("click", handleClick, true);
                wrap.removeEventListener("mousedown", handleMouseDown);
                wrap.removeEventListener("mousemove", handleMouseMoveAll);
                wrap.removeEventListener("mouseup", handleMouseUp);
                wrap.removeEventListener("mouseleave", handleLeave);
                document.body.classList.remove("program-page");
            };
        }, []);


        return(
            <section className="program-page">
                <p className="page-name">PROGRAM</p>
                <div className="program-wrap" ref={wrapRef}>
                    <ProgramCard />
                </div>
            </section>
        );
    }

    export default Programs;