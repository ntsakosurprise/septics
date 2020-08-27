
import * as types from './types'
import * as props from './props'



export default (state = props,action)=>{


        switch(action.type){

            case types.ADD_TO_BROWSER_HISTORY:
                return {

                    ...state,
                    history: [...state,action.payload],
                    index: [...state,action.payload].length - 1
                }
                break;
            case types.GO_FOWARD_TO_BROWSER_ITEM:
                return {

                    ...state,
                    index: state.index + 1
                }
                break;
            case types.GO_BACK_TO_BROWSER_ITEM:
                return {
                    ...state,
                    index: state.index - 1
                }
                break;
            case types.RESET_BROWSER_HISTORY:
                return {
                    ...state,
                    history: []
                }
                break;
            default:
                return state
        }

}