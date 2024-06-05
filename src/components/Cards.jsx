import React from "react";

const Cards = ({ children, bgColor = "bg-gray-100" }) => {
    return (
        <div className={`${bgColor} p-6 rounded-lg shadow-md`}>{children}</div>
    );
};

export default Cards;
