import React, { useState, useContext } from "react";
import PopUp from "../components/popup";
import DiscordLogin from "../components/discordLogin";

import { addApplyDao } from "../firebaseHandler";
import FbContext from "../context";

const OnBoarding = () => {
  const [daolist, setDaolist] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const db = useContext(FbContext);

  const createDao = () => {
    let owner = user.username;
    let ownerEmail = document.querySelector("#email").value;
    let dname = document.querySelector("#daos").value;
    let desc = document.querySelector("#desc").value;
    let obj = daolist.filter((ele) => ele.name === dname);

    console.log(db, obj[0]?.id, dname, owner, ownerEmail, desc);
    addApplyDao(db, obj[0]?.id, dname, owner, ownerEmail, desc);
  };

  const loginEvent = (name, list) => {
    console.log(name, list);
    if (name && list.length > 0) {
      setDaolist(list);
      setUser(name);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Apply for the onboarding tool</p>
      <DiscordLogin loginEvent={loginEvent} />
      <br />
      <br />
      <br />

      {daolist.length > 0 ? (
        <>
          <select name="daos" id="daos">
            {daolist.map((ele) => {
              return <option value={ele.name}>{ele.name}</option>;
            })}
          </select>

          <input id="desc" type="text" placeholder="description" />
          <input id="email" type="email" placeholder="email" />
          <br />
          <br />
          <button onClick={createDao}> Next </button>
        </>
      ) : (
        <></>
      )}

      {/* <PopUp /> */}
    </div>
  );
};

export default OnBoarding;
