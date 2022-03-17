import React from "react";
import "./styles.scss";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";

const ArrowButton = ({ text }) => {
    return (
        <div className="ab-container">
            <h2 className="fb">{text}</h2>
            <Arrow className="svg" />
        </div>
    );
};

export default ArrowButton;
