import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookSession from "../CardContents/BookSession/BookSession";
import GetStarted from "../CardContents/GetStarted/GetStarted";
import MemberOnboarding from "../CardContents/MemberOnboarding/MemberOnboarding";
import CardShuffle from "../CardShuffle/CardShuffle";
import OnboardingTitle from "../OnboardingTitle/OnboardingTitle";
import "./styles.scss";
import {
    getDao,
    firestoreDB,
    addUser,
    getUser,
} from "../../firebaseHandler.js";

const Onboarding = ({ route }) => {
    const [step, setStep] = useState(0);
    const { address } = useParams();
    const [animate, setAnimate] = useState(false);
    const [dao, setDao] = useState(null);
    const [user, setUser] = useState(null);

    const fetchDao = async () => {
        const dao = await getDao(firestoreDB, "954159703536062565");
        setDao(dao);
    };

    const fetchUser = async () => {
        const user = await getUser(firestoreDB, address);
        setUser(user);
    };

    const setUserData = async (
        user_about,
        user_portfolio,
        user_tag,
        user_nickname
    ) => {
        try {
            let about = user_about;
            let portfolio = user_portfolio;
            let tags = user_tag ? [user_tag] : [];
            let nickname = user_nickname;

            if (user) {
                about = user_about || user.about;
                portfolio = user_portfolio || user.portfolio;
                tags = user.tags ? [...user.tags, ...tags] : tags;
                nickname = user_nickname || user.nickname;
            }

            await addUser(
                firestoreDB,
                address,
                nickname || "",
                about || "",
                portfolio || "",
                tags
            );
            nextStep();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDao();
        fetchUser();
    }, []);

    console.log(user);

    const titles = (dao) => [
        `Get started with ${dao.name}`,
        "Member Onboarding",
        "Onboarding live buddy session",
    ];

    const nextStep = () => {
        setAnimate(true);
    };

    if (!dao) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="home-container">
            <div
                className="progress"
                style={{
                    width: `${(step + 1) * 33.33}%`,
                }}
            ></div>
            <div className="onboarding">
                <OnboardingTitle title={titles(dao)[step]} number={step + 1} />
                <CardShuffle
                    step={step}
                    setStep={setStep}
                    animate={animate}
                    setAnimate={setAnimate}
                    components={[
                        <GetStarted dao={dao} onNextClick={nextStep} />,
                        <MemberOnboarding
                            user={user}
                            onNextClick={setUserData}
                            onSkipClick={nextStep}
                        />,
                        <BookSession dao={dao} />,
                    ]}
                />
            </div>
        </div>
    );
};

export default Onboarding;
