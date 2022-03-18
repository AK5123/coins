import React, { useState, useContext, useEffect } from "react";

import DiscordLogin from "../components/discordLogin";
import { checkAdminUser, addCompleteDao } from "../firebaseHandler";
import FbContext from "../context";
import RichText from "../components/richText";
import LoomComponent from "../components/loomComponent";

import "../index.css";

const Overview = () => {
  //   useEffect(() => {
  //     const init = async () => {

  //       const dao = collection(db1, "dao");
  //       const q = query(dao, where("owner", "==", "ak5123"));
  //       console.log("dao", db1, dao);
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //     };
  //     init();
  //   }, []);

  const db = useContext(FbContext);
  const [daolist, setDaolist] = useState([]);
  const [user, setUser] = useState(null);
  const [config, setConfig] = useState(false);
  const [loomurl, setUrl] = useState("");
  const [rich, setRich] = useState("");
  const [daoName, setDao] = useState("");
  //   console.log("db", db);

  const loginEvent = (user, list) => {
    console.log(user, list);
    if (user && list.length > 0) {
      setDaolist(list);
      setUser(user);
      checkAdminUser(user.username).then((res) => {
        console.log(res);
        if (res && res.length > 0) {
          setConfig(true);
          setDao(res[0]);
        }
      });
    }
  };

  const record = () => {
    //loom record and insert value;
    const walkthrough = document.querySelector("#onboarding");
    walkthrough.value = walkthrough;
  };

  const onSubmit = () => {
    // const daoName = document.querySelector("#named").value;
    // const rtEditor = document.querySelector("#rt").value;
    // const walkthrough = document.querySelector("#onboarding").value;
    const calendar = document.querySelector("#calend").value;
    addCompleteDao(db, daoName?.id, loomurl, calendar, rich);
    //execute firebase
  };

  return (
    <>
      <DiscordLogin loginEvent={loginEvent} />

      {config && (
        <div className="home-container">
          {/* <form> */}
          <h4>Name</h4>
          <input id="named" value={daoName?.name}></input>
          <h4>Onboarding instructions</h4>
          {/* Rich text componment */}
          <RichText getHtml={(e) => setRich(e)} />
          {/* <input type="text" id="rt"></input> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Onboarding walkthrough</h4>
            <LoomComponent getUrl={(url) => setUrl(url)} />
            {/* <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  record();
                }}
              >
                Record
              </button> */}
          </div>
          <input type="text" id="onboarding" value={loomurl}></input>
          <h4>Group calendly link</h4>
          <input type="text" id="calend"></input>
          <br></br>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("submit");
              onSubmit();
            }}
          >
            Submmit
          </button>
          {/* </form> */}
        </div>
      )}
    </>
  );
};

export default Overview;
