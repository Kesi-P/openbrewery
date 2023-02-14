import { ActionTypes } from './action-type'
import allBrewapi from '../api/brew'

//using middleware to help to synchronous  api  in the action
//each function return the data from searching
export const srtBrew = () => async (dispatch) => {
    const response = await allBrewapi.get()
    dispatch({type:ActionTypes.ALL_BREW, payload:response.data})
}
export const srtState =(query) => {
    return async function (dispatch, getState){
        const response = await allBrewapi.get(query)
        dispatch({type:ActionTypes.STATE, payload:response.data})
    }
}

export const srtCity =(query) => {
     return async function (dispatch, getState){
        const response = await allBrewapi.get(query)
        dispatch({type:ActionTypes.CITY, payload:response.data})
    }
}

export const srtName =(query) => {
    return async function (dispatch, getState){
        const response = await allBrewapi.get(query)
        dispatch({type:ActionTypes.NAME, payload:response.data})
    }
}
