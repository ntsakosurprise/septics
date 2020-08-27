
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_ALERTS_CATS_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_ALERTS_CATS_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                alertCategories: [...action.response],
              
               
                
            }

        case types.FETCH_ALERTS_CATS_FAILURE:
            

            return  {

                ...state,
                isFetching: false,
                message: action.error
                
            }

            case types.SET_ALERTS_CATEGORY:
                
    
                return  {
    
                    ...state,
                    alertsCurrentCategory: action.payload
                    
                }

      
        default:
        return state
    }


}