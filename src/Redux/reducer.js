import { ActionTypes } from './action-type'
const intialState = {
    allBrew: [],
    allState: [],
    allCity: [],
    allName: [],
  };
 
export const allBrewreducer = (state = intialState ,  { type, payload }) => {
    switch(type){
        //update all data
        case ActionTypes.ALL_BREW:{
          return {...state,allBrew: payload,allState:payload, allCity: payload, allName: payload}
        }
        //update city and name depends on state searched
        case ActionTypes.STATE:{
            return {...state,allCity: payload,allName: payload}           
        }
        //update name depends on city searched
        case ActionTypes.CITY:{
            return {...state,allName: payload}
        }
        //update name depends on name searched
        case ActionTypes.NAME:{
            return {...state,allName: payload}
        }
        default:
            return state
    }
}