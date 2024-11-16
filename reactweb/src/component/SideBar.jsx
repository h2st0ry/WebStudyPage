import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  const categories = [
    { name: "Communication", path: "/Communication" },
    { name: "QnA", path: "/QnA" },
    { name: "Sharing", path: "/Sharing" },
    { name: "ToDoList", path: "/ToDoList" },
    { name: "Tools", path: "/Tools" },
  ];

  return (
    <div className="SideBarBox">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`box ${activeBox === index ? "active" : ""}`}
          onClick={() => handleBoxClick(index)}
        >
          <Link to={category.path}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}
