import {GET_RECIPES, GET_RECIPE_DETAIL, FILTER_BY_DIET, ORDER_BY_NAME, ORDER_BY_SCORE, GET_RECIPES_NAME, GET_DIETS, CLEAR_DETAIL} from "../actions";

const initialState = {
    recipes: [],
    allrecipes: [],
    recipeDetail: {},
    diets: [],
    searchrecipes: []
}

function rootReducer (state=initialState,action){
 switch(action.type){
    case GET_RECIPES:
        return{
            ...state,
            recipes:action.payload,
            allrecipes:action.payload,
        }

    case GET_RECIPES_NAME:
        // if(state.recipes.length)
            let nombres = action.payload.map(r=>r.name)
            if (state.searchrecipes.length === 0 ){var rdo = state.recipes.filter(r=>nombres.includes(r.name))}
            else{var rdo = action.payload}
            
        return{
            ...state,
            recipes:rdo,
            searchrecipes: rdo
        }

    case GET_RECIPE_DETAIL:
        return{
            ...state,
            recipeDetail: action.payload
        }

    case FILTER_BY_DIET: //esta trabajaba con all
        if(state.searchrecipes.length !== 0){var allrecipes = state.searchrecipes}
        else{var allrecipes = state.allrecipes;}
        // const allrecipes = state.allrecipes;
        let filtered = action.payload === "All" ? allrecipes : allrecipes.filter(r =>{
            if(typeof r.diets[0]=== "string") {return r.diets.includes(action.payload.toLowerCase())}
            else{return r.diets.map(s=>s.name).includes(action.payload.toLowerCase())}})   
        return{
            ...state,
            recipes: filtered
        }
    
    case ORDER_BY_NAME:
        const ordered = action.payload === "A-Z" ? state.recipes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)) 
        : state.recipes.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))
        const allordered = action.payload === "A-Z" ? state.allrecipes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)) 
        : state.allrecipes.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))
        
        return{
            ...state,
            recipes: ordered,
            allrecipes: allordered
        }

    case ORDER_BY_SCORE:
        const orderedbyscore = action.payload === "Asc" ? state.recipes.sort((a,b) => (a.healthscore > b.healthscore) ? 1 : ((b.healthscore > a.healthscore) ? -1 : 0)) 
        : state.recipes.sort((a,b) => (a.healthscore < b.healthscore) ? 1 : ((b.healthscore < a.healthscore) ? -1 : 0))
        const allorderedbyscore = action.payload === "Asc" ? state.allrecipes.sort((a,b) => (a.healthscore > b.healthscore) ? 1 : ((b.healthscore > a.healthscore) ? -1 : 0)) 
        : state.allrecipes.sort((a,b) => (a.healthscore < b.healthscore) ? 1 : ((b.healthscore < a.healthscore) ? -1 : 0))
        return{
            ...state,
            recipes: orderedbyscore,
            allrecipes: allorderedbyscore
        }
    
    case GET_DIETS:
        return{
            ...state,
            diets:action.payload,
        }

    case CLEAR_DETAIL:
        return{
            ...state,
            recipeDetail: {}

        }
        
    default:
        return{...state}
 }
}


export default rootReducer