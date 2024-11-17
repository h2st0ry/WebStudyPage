import React from "react";
import MyCategory from "./MyCategory";
import CategoryBar from "./CategoryBar";


export default function Header() {
    return (
        <>
            <div className="header">
                <div className="SiteLogo">
                    <div className="SiteName" href="/">We_eb</div>
                    <img src="/gromit.png" alt="Gromit" />
                </div>
            </div>
            <MyCategory />
            <CategoryBar />
        </>
    );
}