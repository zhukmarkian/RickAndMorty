import React from "react"
import {Link} from 'react-router-dom'
import '../Body.css'
const CharCard = ({char}) => {
    return (
        <div className='characters'>
            {char.map(char => <Link className="btn btn-warning m-1" to={`/${char.id}`} key={char.id} role="button"><div  key={char.id} className='character'>

                    <div className={"character-photo"}>
                                         <img src={char.image} alt="character"/>
                                  </div>
                                 <div className="character-content">
                                     <h3>Name: {char.name}</h3>
                                     <h4>Species: {char.species}</h4>
                                    <h4>Location: {char.location.name}</h4>
                                 </div>

                </div>
                </Link>
                )}

        </div>

    )
};
export default CharCard;
