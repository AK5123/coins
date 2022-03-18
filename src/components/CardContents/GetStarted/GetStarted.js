import { oembed } from "@loomhq/loom-embed";
import React, { useState, useEffect, useRef } from "react";
import ArrowButton from "../../ArrowButton/ArrowButton";
import "./styles.scss";
const GetStarted = ({ onNextClick, dao }) => {
    const ref = useRef(null);
    const [embedHTML, setEmbed] = useState(null);

    useEffect(() => {
        async function getVideoHtml() {
            const { html } = await oembed(dao.video, { width: 400 });
            setEmbed(html);
        }
        getVideoHtml();
    }, []);

    return (
        <div className="gs-container">
            <div className="top">
                <div dangerouslySetInnerHTML={{ __html: dao.about }}></div>
                {embedHTML && (
                    <div
                        className="video"
                        dangerouslySetInnerHTML={{ __html: embedHTML }}
                    ></div>
                )}
            </div>
            <div className="bottom">
                <ArrowButton text={"Next Step"} onClick={onNextClick} />
            </div>
        </div>
    );
};

export default GetStarted;
