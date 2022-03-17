import React, { useState } from "react";
import ArrowButton from "../../ArrowButton/ArrowButton";
import "./styles.scss";

const Input = () => {
    return (
        <div className="input-container">
            <p className="input-heder fm">Twitter</p>
            <div className="input-c">
                <input className="input fr" />
            </div>
        </div>
    );
};

const MemberOnboarding = () => {
    return (
        <div className="member-onboarding">
            <div className="top">
                <p className="fr">
                    Onboard yourself to the members directory of the dao to get
                    exclusive benifits, bounties and work opportunities. This is
                    just a way for us to know what value you can add to the dao.
                    Completely optional
                </p>
                <div className="row">
                    <Input />
                    <Input />
                    <Input />
                </div>
                <div className="row">
                    <Input />
                    <Input />
                    <Input />
                </div>
            </div>
            <div className="bottom">
                <ArrowButton text={"Skip Step"} />
                <ArrowButton text={"Next Step"} />
            </div>
        </div>
    );
};

export default MemberOnboarding;
