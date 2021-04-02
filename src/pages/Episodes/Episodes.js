import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Episodes(props){
    const [episode, setEpisode] = useState([]);
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
            .then(res => {
                setEpisode(res.data);
                console.log("Response:", res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [props.match.params.id]);

    return(

        <div className='soloChar'>
            <h3>{episode.name}</h3>
            <img src={episode.id} alt="profile pic"/>
            <p>Status: {episode.id}</p>

        </div>
    )
 }

