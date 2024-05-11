import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();
    return(
        <>
            <h1 className="bg-orange-600 text-3xl p-4 text-center text-white">User: {id}</h1>
        </>
    )
}

export default User;