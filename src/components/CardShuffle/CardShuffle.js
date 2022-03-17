import React, { useState } from "react";
import BookSession from "../CardContents/BookSession/BookSession";
import GetStarted from "../CardContents/GetStarted/GetStarted";
import MemberOnboarding from "../CardContents/MemberOnboarding/MemberOnboarding";
import "./styles.css";

const CardShuffle = () => {
    const [index, setIndex] = useState(0);
    const arr = ["one", "two", "three"];
    const [animate, setAnimate] = useState(false);
    console.log(index);

    return (
        <div className="stack">
            <div
                className={`card one ${animate ? "anim" : ""}`}
                onClick={() => {
                    console.log("clicked bro");
                    setAnimate(true);
                }}
                onAnimationEnd={() => {
                    setAnimate(false);
                    setIndex(index + 1);
                }}
            >
                <BookSession />
            </div>
            <div className={`card two ${animate ? "anim" : ""}`}>
                <span>{arr[(index + 1) % 3]}</span>
            </div>
            <div className={`card three ${animate ? "anim" : ""}`}>
                <span>{arr[(index + 2) % 3]}</span>
            </div>
        </div>
    );
};

export default CardShuffle;
