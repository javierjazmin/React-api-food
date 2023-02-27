import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const ADD_RECIPE = "ADD_RECIPE";
export const FILTER_BY_DIET = "FILTER_BY_DIET"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_SCORE = "ORDER_BY_SCORE"
export const GET_RECIPES_NAME = "GET_RECIPES_NAME"
export const GET_DIETS = "GET_DIETS"
export const CLEAR_DETAIL = "CLEAR_DETAIL"

  export function getRecipes() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: GET_RECIPES,
        payload: json.data,
      });
    };
  }

  export function getRecipesbyName(input) {
    return async function (dispatch) {
      try{
      let json = await axios.get(`http://localhost:3001/recipes?name=${input}`);
      return dispatch({
        type: GET_RECIPES_NAME,
        payload: json.data,
      })}
      catch(e){alert("No recipe found")}
    };
  }

  export function getRecipeDetail(id) {
    return async function (dispatch) {
      let json = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_RECIPE_DETAIL,
        payload: json.data[0],
      });
    };
  }

  export function clearDetail() {
      return ({
        type: CLEAR_DETAIL
      });
  }

  export function filterbyDiet(payload) {
    return ({
         type: FILTER_BY_DIET,
         payload,
    });
  }

  export function orderByName(payload) {
    return ({
         type: ORDER_BY_NAME,
         payload,
    });
  }

  export function orderByScore(payload) {
    return ({
         type: ORDER_BY_SCORE,
         payload,
    });
  }


  export const createRecipe = (input) => {
    return async function(dispatch){
      let response = await axios.post("http://localhost:3001/recipes", input);
      let msj = response.data
      dispatch({type: ADD_RECIPE, payload: msj})
    }
 };

  export function getDiets() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/diets");
      return dispatch({
        type: GET_DIETS,
        payload: json.data,
      });
    };
  }