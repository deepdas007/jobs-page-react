import React from "react";
import { ClipLoader } from "react-spinners";

const cssOveride = {
    display: "block",
    margin: "100px auto",
};

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color="#4338ca"
            loading={loading}
            cssOverride={cssOveride}
            size={150}
        />
    );
};

export default Spinner;
