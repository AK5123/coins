import React, { useEffect, useState } from "react";
import ArrowButton from "../../ArrowButton/ArrowButton";
import "./styles.scss";
import { MenuItem, Select } from "@material-ui/core";

const Input = ({ text, setText, title, placeholder = "" }) => {
    return (
        <div className="input-container">
            <p className="input-heder fm">{title}</p>
            <div className="input-c">
                <input
                    className="input fr"
                    placeholder={placeholder}
                    text={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
        </div>
    );
};

const MemberOnboarding = ({ onNextClick, onSkipClick, user }) => {
    const [discord, setDiscord] = useState("");
    const [twitter, setTwitter] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [telegram, setTelegram] = useState("");
    const [about, setAbout] = useState("");
    const [tag, setTag] = useState(" ");
    const { about: user_about, portfolio: user_pf, nickname } = user || {};

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
                    <Input
                        text={discord}
                        setText={setDiscord}
                        title="Discord Name"
                        placeholder={nickname}
                    />
                    <Input
                        text={twitter}
                        setText={setTwitter}
                        title="Twitter"
                    />
                    <Input
                        text={telegram}
                        setText={setTelegram}
                        title="Telegram"
                    />
                </div>
                <div className="row">
                    <div className="flex">
                        <h2>I am</h2>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={tag}
                            onChange={(event) => setTag(event.target.value)}
                        >
                            <MenuItem value={" "}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"full_stack"}>
                                Full Stack Developer
                            </MenuItem>
                            <MenuItem value={"frontend"}>
                                Frontend Developer
                            </MenuItem>
                            <MenuItem value={"backend"}>
                                Backend Developer
                            </MenuItem>
                        </Select>
                    </div>
                    <Input
                        text={portfolio}
                        setText={setPortfolio}
                        title="Portfolio"
                        placeholder={user_pf}
                    />
                    <Input
                        text={about}
                        setText={setAbout}
                        title="About yourself"
                        placeholder={user_about}
                    />
                </div>
            </div>
            <div className="bottom">
                <ArrowButton
                    text={"Skip Step"}
                    onClick={() => {
                        setTelegram("Helloooo");
                    }}
                />
                <ArrowButton
                    text={"Next Step"}
                    onClick={() =>
                        onNextClick(
                            about,
                            portfolio,
                            tag === " " ? null : tag,
                            discord
                        )
                    }
                />
            </div>
        </div>
    );
};

export default MemberOnboarding;
