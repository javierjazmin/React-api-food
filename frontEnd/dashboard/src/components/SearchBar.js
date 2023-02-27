import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import {  useDispatch } from "react-redux";
import { useState} from "react";
import "../assets/css/searchBar.css";

export default function SearchBar ({setCurrentPage, setOrden}){
    const pageNumbers= []

    let dispatch = useDispatch(); 
    const [input,setInput]=useState("")

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(actions.getRecipesbyName(input))
        setInput("")
        setCurrentPage(1);
    }

    const handleClick=(e)=>{
        dispatch(actions.getRecipes());
        let filterHS = document.getElementById("Health-Score");
        filterHS.value="none"
        let filter = document.getElementById("Alfabetic");
        filter.value="none"
        let selector = document.getElementById("Diet");
        selector.value="none"

    }

    

    const handleFilterxDiet = function(e){
        e.preventDefault();
        dispatch(actions.filterbyDiet(e.target.value))
        setCurrentPage(1);
        // setOrden(`Ordenado ${e.target.value}`)
    }

    const handleOrderbyName = function(e){
        e.preventDefault();
        dispatch(actions.orderByName(e.target.value));
        let filter = document.getElementById("Health-Score");
        filter.value="none"
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)

    }

    const handleOrderbyScore = function(e){
        e.preventDefault();
        dispatch(actions.orderByScore(e.target.value));
        let filter = document.getElementById("Alfabetic");
        filter.value="none"
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)

    }


    
    return(
        <div className="general">
            <h1 className="h1">¿QUE COMEMOS HOY?</h1>
            <form className="filters" onSubmit={handleSubmit}>
                <input className="search" type="text" name="input" value={input} placeholder="   Enter recipe´s name..." onChange={handleChange}></input>
                <button className= "btnsearch" type="submit">Buscar...</button>
            </form>
            
            <div className  = "create">
            <Link className  = "create" to="/create">
                <button className="btncreate">Crear una nueva receta</button>
            </Link>
            </div>
                
        <div className="filters">
            <select className= "filter" id="Diet" name="Diet" onChange={handleFilterxDiet} >
                <option value="none">----Seleccionar Dieta----</option>
                <option value = "All">Todas</option>
                <option value = "gluten free">Gluten Free</option>
                <option value = "ketogenic">Ketogenic</option>
                <option value = "lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                {/* <option value = "Lacto-Vegetarian">Lacto-Vegetarian</option>
                <option value = "Ovo-Vegetarian">Ovo-Vegetarian</option> */}
                <option value = "vegan">Vegan</option>
                <option value = "pescatarian">Pescatarian</option>
                <option value = "paleolithic">Paleo</option>
                <option value = "Primal">Primal</option>
                <option value = "fodmap friendly">Fodmap Friendly</option>
                <option value = "whole 30">Whole30</option>
            </select>
            <select className= "filter" id="Alfabetic" name = "Alfabetic" onChange={handleOrderbyName}>
                <option value = "none">----Orden Alfabetico----</option>
                <option value = "A-Z">A-Z</option>
                <option value = "Z-A">Z-A</option>
            </select>
            <select className= "filter" id="Health-Score" name = "Health-Score" onChange={handleOrderbyScore}>
                <option value = "none">----Health-Score Orden----</option>
                <option value = "Asc">Ascendente</option>
                <option value = "Des">Descendente</option>
            </select>
            <button className = "btnreset" name="Reset" onClick={handleClick}>Reset</button>
        </div>

            
        </div>
    )
}