import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateWindowWidth);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    // Define media query styles as separate objects
    const extraSmallStyle = {
        bottom: "20px",
        right: "15px",
        height: "35px",
        width: "35px",
        padding: "6px",
    };

    const smallStyle = {
        bottom: '25px',
        right: '18px',
        height: '39px',
        width: '39px',
        padding: '7px',
    };

    const mediumStyle = {
        bottom: '25px',
        right: '20px',
        height: '40px',
        width: '40px',
        padding: '6px',
    };

    // Merge default style with media query styles based on window width
    const style = {
        position: "fixed",
        bottom: "40px",
        right: "30px",
        height: '45px',
        width: "45px",
        padding: '8px',
        borderRadius: "50%",
        border: "4px solid #F2EC1A",
        backgroundColor: "#ff0000",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "#000 0px 0px 15px",
        ...((windowWidth <= 575.98) && extraSmallStyle),
        ...((windowWidth >= 576 && windowWidth <= 767.98) && smallStyle),
        ...((windowWidth >= 768 && windowWidth <= 991.98) && mediumStyle),
    };

    const arrowStyle = {
        fontSize: "22px",
        animation: showButton ? "bounce 1.2s infinite" : "none",
        // Define media queries for arrow icon size
        ...((windowWidth <= 575.98) && { fontSize: "16px" }),
        ...((windowWidth >= 576 && windowWidth <= 767.98) && { fontSize: "18px" }),
        ...((windowWidth >= 768 && windowWidth <= 991.98) && { fontSize: "20px" })
    };

    return (
        <div>
            {showButton && (
                <div onClick={scrollTop} style={style}>
                    <FaArrowUp style={arrowStyle} />
                </div>
            )}
        </div>
    );
};

export default GoToTopBtn;
