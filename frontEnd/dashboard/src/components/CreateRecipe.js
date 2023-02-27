import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { createRecipe } from "../actions";
import {  useDispatch, useSelector} from "react-redux";
import * as actions from "../actions"
import "../assets/css/createRecipe.css"




export default function CreateRecipe(){
    let dispatch = useDispatch(); 
    const dietsDB = useSelector((state) => state.diets)
    //console.log(dietsDB)

    useEffect(()=>{
        dispatch(actions.getDiets())
      },[dispatch]
      )

    
    const[state,setState] = useState({
        name:"",
        dishtype: "",
        healthscore: "",
        image:"",
        summary: "",
        steps: "",
        diets: []
    })

    const [errors, setErrors] = useState({
        name: "",
        summary: "",
        dishtype: "",
        healthscore: "",
    })

    const submitHandler=(e)=>{
        e.preventDefault();
        if (validation()){
            dispatch(createRecipe(state));
            uncheck()
            setState({
                name:"",
                dishtype: "",
                healthscore: "",
                image:"",
                summary: "",
                steps: "",
                diets: []
            })
            alert("Recipe created succesfully")
        }else{
        alert ("name/dishtype/summary required -- healthscore 0 to 100 -- at least 1 diet selected")}
        //console.log(state)
    }
    
    let uncheck = function() {
        for(let i=0; i<dietsDB.length;i++){
            let input = document.getElementById(dietsDB[i].name);
            input.checked = false;
        } 
    }
    
    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleChangeB=(e)=>{
        if(e.target.checked){
            setState({
                ...state,
                diets:[...state.diets, e.target.name]
            })  
        }else{
            setState({
                ...state,
                diets:state.diets.filter(d => d !== e.target.name)
            })
        }
    }  
    
    let validateName = ()=>{
        if(!state.name){setErrors ({...errors,name:"Name is required"})}else{setErrors ({...errors,name:""})}}

    let validateSummary = ()=>{
        if(!state.summary){setErrors ({...errors,summary :"Summary is required"})}else{setErrors ({...errors,summary :""})}}

    let validateDishtype = ()=>{
        if(!state.dishtype){setErrors ({...errors,dishtype :"Dishtype is required"})}else{setErrors ({...errors,dishtype :""})}}
    
    let validateHS = ()=>{
        if(state.healthscore<0 || state.healthscore>100){setErrors ({...errors,healthscore : "Between 0 and 100"})}else{setErrors ({...errors,healthscore : ""})}}
    
    let validation = ()=>{
        if (state.name && state.summary && state.dishtype && parseInt(state.healthscore)<=100 && parseInt(state.healthscore)>=0 && state.diets.length>0){
        return true 
        }
        return false
    }
    

     
    return(
        <div>
            <div className="header">
                <Link className="back"to="/home">
                    <button className="btnback">Home</button>
                </Link>
                <h1>Crear nueva receta</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <div className="div">
                    <label className="inputtext" htmlFor="name">Name *:  </label>
                    <input className="input"type="text" name="name" value={state.name} onChange={handleChange} onBlur={validateName}></input>
                    {errors.name?(
                    <span className="errors">{errors.name}</span>
                    ):<span className="errors"></span>}
                
                    <label className="inputtext" htmlFor="dishtype">Type *:  </label>
                    <input className="input"type="text" name="dishtype" value={state.dishtype} onChange={handleChange} onBlur={validateDishtype} onClick={validateName}></input>
                    {errors.dishtype?(
                    <span className="errors">{errors.dishtype}</span>
                    ):<span className="errors"></span>}

                </div>
                <div className="div">
                    <label className="inputtext"htmlFor="healthscore">Healthscore:  </label>
                    <input className="input" type="text" name="healthscore" value={state.healthscore} onChange={handleChange} onBlur={validateHS} onClick={validateDishtype}></input>
                    {errors.healthscore ? (
                    <span className="errors">{errors.healthscore}</span>
                    ):<span className="errors"></span>}
                
                    <label className="inputtext" htmlFor="image">Image:  </label>
                    <input className="input" type="text" name="image" placeholder="insertar URL imagen" value={state.image} onChange={handleChange} onClick={validateHS}></input>
                
                </div>
                <div className="div2">
                    <label className="inputtext" htmlFor="summary">Summary *:  </label>
                    <textarea className="inputgrande" type="text" size="80" name="summary" value={state.summary} onChange={handleChange} onBlur={validateSummary}/>
                    {errors.summary?(
                        <span className="errors">{errors.summary}</span>
                    ):<span className="errors"></span>}
                
                </div>
                <div className="div2">
                    <label className="inputtext" htmlFor="steps">Steps:</label>
                    <textarea className="inputgrande" type="text" size="80" name="steps" value={state.steps} onChange={handleChange} onClick={validateSummary}/>
               
                </div>

            
                <div >
                    <legend className="inputtext">Diets :</legend>

                    <div className="diets">{ dietsDB.map(i=>(
                        <div key={i.id}>
                        <input type="checkbox" id={i.name} name={i.name} value={state.diets} onChange={handleChangeB}/>
                        <label for={i.name}>{i.name.toUpperCase()}</label>
                        </div> 
                        ))}
                    </div>
                
                    <div className="dietinfo">
                        If you don´t know which diet your recipe corresponds to, please check <a href="https://spoonacular.com/food-api/docs#Diets">here</a>
                    </div>
                </div>
                <button className="btncreate" type="submit" id= "submit"  >Create</button>    
            </form>
        </div>
    )
        
    
}