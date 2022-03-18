import React from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";

const SideBar = ({ children }) => {
    console.log(children);
    return (
        <>
            <div className="sb-container">Vanakkam</div>
            <Outlet />
        </>
    );
};

export default SideBar;
