import React, { useEffect, useState } from "react";

const ScrollToTopIcon = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / windowHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const strokeDasharray = 283;
    const strokeDashoffset = strokeDasharray - (scrollProgress / 100) * strokeDasharray;

    return (
        <div
            onClick={handleClick}
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                cursor: "pointer",
                width: "60px",
                height: "60px",
                zIndex: 9999,
            }}
        >
            <svg width="60" height="60" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#301934"
                    strokeWidth="3"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="purple"
                    strokeWidth="3"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{ transition: "stroke-dashoffset 0.2s ease" }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="24"
                    fill="purple"
                >
                    ↑
                </text>
            </svg>
        </div>
    );
};

export default ScrollToTopIcon
