import React, { useEffect, useState } from "react";
import { isSupported, setup } from "@loomhq/record-sdk";
import { oembed } from "@loomhq/loom-embed";

const PUBLIC_APP_ID = "355575c5-1562-4411-aebf-d423a1b4fbdc";

const LoomComponent = ({ getUrl }) => {
  const [embedHTML, setEmbed] = useState("");
  useEffect(() => {
    const init = async () => {
      const { supported, error } = await isSupported();
      if (!supported) {
        console.warn(`Error setting up Loom: ${error}`);
        return;
      }
      const button = document.getElementById("loom-btn");
      if (!button) {
        return;
      }
      const { configureButton } = await setup({
        publicAppId: PUBLIC_APP_ID,
      });
      const sdkButton = configureButton({ element: button });
      sdkButton.on("insert-click", async (video) => {
        if (getUrl) {
          getUrl(video.sharedUrl);
        }
        const { html } = await oembed(video.sharedUrl, { width: 400 });
        setEmbed(html);
      });
    };
    init();
  }, []);

  return (
    <div>
      <button id="loom-btn">Record</button>
      <div dangerouslySetInnerHTML={{ __html: embedHTML }}></div>
    </div>
  );
};

export default LoomComponent;
