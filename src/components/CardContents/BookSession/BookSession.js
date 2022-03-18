import React, { useState } from "react";
import ArrowButton from "../../ArrowButton/ArrowButton";
import "./styles.scss";

const BookSession = ({ dao }) => {
    const reroute = (url) => {
        window.location.href = url;
    };
    return (
        <div className="book-onboarding">
            <div className="top">
                <p className="fr">
                    Thanks for completing all the onboarding steps for memdao.
                    Hope we brought you up to speed and prepared you to join our
                    community/Still have doubts or require clarity and a formal
                    onboarding to memeDao ? Feel free to jump into one of the
                    group time slots today. Introduce yourself and meet other
                    new people like you.
                </p>
            </div>
            <div className="bottom">
                <ArrowButton
                    text={"Book onboarding group call"}
                    onClick={() => reroute(dao.calendar)}
                />
                <ArrowButton text={"Join Discord"} />
            </div>
        </div>
    );
};

export default BookSession;
