import React from "react";
import MyCategory from "./MyCategory";
import SideBar from "./SideBar";


export default function Header() {
    return (
        <>
            <div className="header">
                <img src="/gromit.png" alt="Gromit"/>
                <a className="SiteName" href="/">We_eb</a>
                <MyCategory />
            </div>
            <SideBar />

        </>
    );
}