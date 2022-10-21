import React from "react";
import { useState } from "react";
const SomePract = () => {
    let [name, setName] = useState({
        firstName: "something",
        lastName: "somethingelse"
    });
    return (
        <>
            <div onClick={() => setName({
                firstName: "update",
                lastName: "updateTwos"
            })}>
                {name.firstName + name.lastName}

            </div>
        </>
    );
};

export default SomePract;
