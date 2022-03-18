import React from "react";
import "./styles.css";

const CardShuffle = ({ components, step, setStep, animate, setAnimate }) => {
    return (
        <div className="stack">
            <div
                className={`card one ${animate ? "anim" : ""}`}
                onAnimationEnd={(event) => {
                    if (event.animationName === "onTop") {
                        setAnimate(false);
                        setStep(step + 1);
                    }
                }}
            >
                {components[step % 3]}
            </div>
            <div className={`card two ${animate ? "anim" : ""}`}>
                {components[(step + 1) % 3]}
            </div>
            <div className={`card three ${animate ? "anim" : ""}`}>
                {components[(step + 2) % 3]}
            </div>
        </div>
    );
};

export default CardShuffle;
