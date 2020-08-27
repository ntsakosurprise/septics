
import * as types from './types'
import * as props from './props'



export default (state = props,action)=>{

        console.log('THE NAVIGATOR ACTION')
        console.log(action)
        switch(action.type){

            case types.NAVIGATE:
                return {

                    ...state,
                    path: action.payload.path
                    // history: action.payload.history
                }
                break;
            default:
                return state
        }

}