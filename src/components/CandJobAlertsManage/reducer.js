
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_MANAGE_ALERT_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }

        case types.FETCH_MANAGE_ALERT_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                manageAlert: {...action.response[0]}
              
               
                
            }

        case types.FETCH_MANAGE_ALERT_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: action.error
                
            }
            case types.SEND_USER_ALERT_UPDATE_REQUEST:

                return  {
    
                    ...state,
                    isFetching: true,
                    isProgressBar: action.payload
                    
                }
    
            case types.SEND_USER_ALERT_UPDATE_SUCCESS:
    
              
                return  {
    
                    ...state,
                    isFetching: false,
                    isProgressBar: false,
                    isActionSuccessful: action.response.updateStatus,
                    manageAlert: {...state.manageAlert,frequency: action.response.frequency}
                  
                }
    
            case types.SEND_USER_ALERT_UPDATE_FAILURE:
    
                return  {
    
                    ...state,
                    isFetching: false,
                    isProgressBar: false,
                    message: action.error
                    
                }
    

        case types.SET_ALERT_UPDATE_DATA:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                update: {...action.payload}
                
            }

        case types.UNSET_NOTIFICATION_DISPLAY:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: action.payload
                
            } 




      
        default:
        return state
    }


}