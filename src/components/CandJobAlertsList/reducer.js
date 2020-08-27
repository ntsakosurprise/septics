
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_ALERTS_LIST_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_ALERTS_LIST_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                alertsList: [...action.response]
              
               
                
            }

        case types.FETCH_ALERTS_LIST_FAILURE:

            return  {

                ...state,
                isFetching: false,
                message: action.error
                
            }
            case types.SET_ALERT_ID:

                return  {
    
                    ...state,
                    isFetching: false,
                    alertID: action.payload
                    
                }
    

      
        default:
        return state
    }


}