import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/namanuppal')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res)
    //         setData(res)
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-orange-600 text-white p-4 text-3xl">GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="git_picture" width={300} />
        <span>{data.name}</span>
        </div>
    )
}

export default GitHub;

export const GithubInfo = async () => {
    const res = await fetch('https://api.github.com/users/namanuppal')
    return res.json();
}


// the both methods are same but to prevent LOADING in it the useLoaderData is imort and use in it. It make its aptimise.