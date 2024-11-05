import React from "react";

import MyCategory from "./MyCategory";
import SideBar from "./SideBar";


export default function Header() {
    return (
        <>
            <div className="header">
                <a className="SiteName" href="home">We_eb</a>
                <MyCategory />
            </div>
            <SideBar />
        </>
    );
}