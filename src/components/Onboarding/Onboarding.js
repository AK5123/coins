import React, { useState } from "react";
import CardShuffle from "../CardShuffle/CardShuffle";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import OnboardingTitle from "../OnboardingTitle/OnboardingTitle";
import "./styles.scss";

const Onboarding = ({ name }) => {
    const [step, setStep] = useState(1);

    return (
        <div className="home-container">
            <div className="progress"></div>
            {step === 0 ? (
                <ConnectWallet />
            ) : (
                <div className="onboarding">
                    <OnboardingTitle title={"Hey what the fuck"} number={2} />
                    <CardShuffle />
                </div>
            )}
        </div>
    );
};

export default Onboarding;
