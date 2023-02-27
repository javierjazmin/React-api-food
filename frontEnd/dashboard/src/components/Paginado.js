import React from "react";
import "../assets/css/paginado.css";

export default function Paginado ({recipesxPage,recipes,paginado, currentPage, setCurrentPage}){
    const pageNumbers= []

    for(let i=0; i<Math.ceil(recipes/recipesxPage);i++){
        pageNumbers.push(i+1)
    }

    function prevPage() {
        setCurrentPage(currentPage - 1);
    }
    function nextPage() {
        setCurrentPage(currentPage + 1);
    }

    return(
        <nav >
            <ul className="paginado">
                <button className="flechas"onClick={prevPage} disabled={currentPage<2}>◄</button>
                {pageNumbers && pageNumbers.map(n =>(
                   <li key={n} >
                    <button className="numeros" onClick={()=>paginado(n)} disabled={currentPage === n}>{n} </button>
                   </li> 
                ))}
                <button className="flechas" onClick={nextPage} disabled={currentPage >pageNumbers.length-1}>►</button>
            </ul>
        </nav>
    )
}