import React from "react";
import MyCategory from "./MyCategory";
import CategoryBar from "./CategoryBar";

export default function Header() {
    return (
        <div className="fixed">
            <div className="header">
                <div className="SiteLogo">
                    <a className="SiteName" href="/">We_eb</a>
                    <img src="/gromit.png" alt="Gromit" />
                </div>
            </div>
            <MyCategory />
            <CategoryBar />
        </div>
    );
}
