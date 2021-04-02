import React, {useState, useEffect} from "react";
import axios from "axios";

export default function SoloChar(props) {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(res => {
                setChar(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [props.match.params.id]);

    return (
        <div className='characters-info'>

            <img src={char.image} alt="character"/>
            <h3>Name: {char.name}</h3>
            <h4>Status: {char.status}</h4>
            <h4>Type:{char.type}</h4>
            <h4>Episode:<div className={'episode'}>
                {char.episode}
            </div></h4>

        </div>

    )
}
