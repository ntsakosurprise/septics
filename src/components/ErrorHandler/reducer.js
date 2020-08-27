
import * as types from './types'
import * as props from './props'






export default (state = props, action)=>{

    switch (action.type) {
        // case types.OPERATIONAL_ERROR_404:

        //     return run404(state,action)

        case types.NONE_OPERATIONAL_ERROR:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                message: action.error
                
            }

       
    
        default:
        return state
    }


}



