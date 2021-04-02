import React, {useState, useEffect} from "react";
import axios from "axios";
import PaginationChar from "../../components/pagination/PaginationChar";
import '../../components/Body.css'
import CharCard from "../../components/CharCards/CharCard";



function Characters() {
    const [chars, setChars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charPerPage,] = useState(12);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setChars(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setChars(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const indexOfLastPage = currentPage * charPerPage;
    const indexOfFirstPage = indexOfLastPage - charPerPage;
    const currentChar = chars.slice(indexOfFirstPage, indexOfLastPage);
    function selectStatus (array) {
        if (setChars(chars.filter(arr => arr.status !== "Alive"))) {
            return array
        }
    }
    function selectStatus1 (array) {
        if (setChars(chars.filter(todo => todo.status === "Dead"))) {
            return array

        }
    }
    function selectGender (array) {
        if (setChars(chars.filter(arr => arr.gender !== "Male"))) {
            return array
        }
    }
    function selectGender1 (array) {
        if (setChars(chars.filter(todo => todo.gender === "Male"))) {
            return array

        }
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className="Body">
<div className={"filter"}>
<div className={"status"}>
    Chose:   <button  onClick={selectStatus1}>Die</button> <button  onClick={selectStatus}>Alive</button>
</div>
<div className={"gender"}>
         Chose:   <button  onClick={selectGender}>Male</button> <button  onClick={selectGender1}>Female</button>

</div>
</div>
            <CharCard key={chars.id} char={currentChar}/>

            <PaginationChar charPerPage={charPerPage} totalChars={chars.length} paginate={paginate}/>
        </div>
    )
}


export default Characters;
