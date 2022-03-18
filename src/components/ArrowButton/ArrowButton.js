import React from "react";
import "./styles.scss";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";

const ArrowButton = ({ text, onClick }) => {
    return (
        <div className="ab-container" onClick={onClick}>
            <h2 className="fb">{text}</h2>
            <Arrow className="svg" />
        </div>
    );
};

export default ArrowButton;
