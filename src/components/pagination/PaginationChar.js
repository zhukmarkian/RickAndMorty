import React from "react"
import "../Body.css"
const PaginationChar = ({charPerPage, totalChars, paginate }) => {
    const pageNumbers = [];
    for (let i = 1;  i<=Math.ceil(totalChars / charPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className={'main-pagination'}>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={()=> paginate(number)}  className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

};
export default PaginationChar;
