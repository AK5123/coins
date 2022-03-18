import React, { useState } from "react";
import "./styles.scss";

const OnboardingTitle = ({ number, title }) => {
    return (
        <div className="title-container">
            <div className="number-container">
                <h2 className="fb">{number}</h2>
            </div>
            <h2 className="title fb">{title}</h2>
        </div>
    );
};

export default OnboardingTitle;
