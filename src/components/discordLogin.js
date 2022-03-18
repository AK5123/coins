import React, { useEffect, useState } from "react";

const getToken = (code, onSuccess, onError) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "954129637036937256\n");
  urlencoded.append("client_secret", "C6RAHCkwIqW4_XK7nnPdQZq4Q7-SGMYN");
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("code", code);
  urlencoded.append("redirect_uri", window.location.origin);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://discord.com/api/v8/oauth2/token", requestOptions)
    .then(async (response) => {
      let obj = await response.json();
      console.log("res", obj);
      onSuccess(obj);
      localStorage.setItem(
        "discord",
        JSON.stringify({ token: obj["access_token"] })
      );
    })
    .catch((error) => onError(error));
};

const getUser = (token, onsuccess) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://discord.com/api/v8/users/@me", requestOptions)
    .then(async (response) => {
      let l = await response.json();
      onsuccess(l);
    })
    .catch((error) => console.log("error", error));
};

const getOwnerGuilds = (token, onsuccess) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://discord.com/api/v8/users/@me/guilds", requestOptions)
    .then(async (response) => {
      let l = await response.json();
      onsuccess(l.filter((l) => l.owner));
    })
    .catch((error) => console.log("error", error));
};

const DiscordLogin = ({ loginEvent }) => {
  const [logged, setLogged] = useState(false);
  const handleRedirect = () => {
    if (!logged) {
      const fragment = new URLSearchParams(window.location.search);
      let code = fragment.get("code");
      window.location.href =
        "https://discord.com/api/oauth2/authorize?client_id=954129637036937256&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify%20guilds";
    } else {
      localStorage.removeItem("discord");
      setLogged(false);
    }
  };

  useEffect(() => {
    let payload = localStorage.getItem("discord");
    const fragment = new URLSearchParams(window.location.search);
    let code = fragment.get("code");
    if (payload) {
      let token = JSON.parse(payload).token;
      getUser(token, (name) => {
        if (name.username) {
          setLogged(true);
          getOwnerGuilds(token, (list) => {
            if (loginEvent) {
              loginEvent(name, list);
            }
          });
        } else {
          localStorage.removeItem("discord");
        }
      });
    } else if (code) {
      getToken(
        code,
        (res) => {
          console.log("out", res);
          if (!res.error) {
            setLogged(true);
            let token = res["access_token"];
            getUser(token, (name) => {
              getOwnerGuilds(token, (list) => {
                if (loginEvent) {
                  loginEvent(name, list);
                }
              });
            });
          }
        },
        () => {}
      );
    }
  }, []);

  return (
    <button onClick={handleRedirect}>
      {logged ? "Logout of Discord" : "Log in Discord"}{" "}
    </button>
  );
};

export default DiscordLogin;
