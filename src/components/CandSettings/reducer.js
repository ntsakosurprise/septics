
import * as types from './types'
import * as props from './props'




export default (state = props, action)=>{

    switch (action.type) {


        case types.FETCH_USER_ALERTS_SUBSCRIPTIONS_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }

        case types.FETCH_USER_ALERTS_SUBSCRIPTIONS_SUCCESS:

            
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                alertsEmails: {...action.response},
              
               
              
               
                
            }

        case types.FETCH_USER_ALERTS_SUBSCRIPTIONS_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: action.error
                
            }
           

      
        
        case types.SEND_USER_NEW_ALERT_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }

        case types.SEND_USER_NEW_ALERT_SUCCESS:

            
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: true,
                alertsEmails: {...action.response.taken},
                launcher: action.launcher
                
            }

        case types.SEND_USER_NEW_ALERT_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: action.error
                
            }

        // case types.SEND_USER_PROFILE_UPDATE_REQUEST:

        //     return  {

        //         ...state,
        //         isFetching: true,
        //         isProgressBar: action.payload
                
        //     }
    


        // case types.SEND_USER_PROFILE_UPDATE_SUCCESS:

        
        //     return  {

        //         ...state,
        //         isFetching: false,
        //         isProgressBar: false,
        //         isActionSuccessful: true,
        //         profile: {...state.profile,...action.response.update}
               
                
        //     }

        // case types.SEND_USER_PROFILE_UPDATE_FAILURE:

        //     return  {

        //         ...state,
        //         isFetching: false,
        //         isProgressBar: false,
        //         message: action.error
                
        //     } 


        case types.SEND_USER_ALERT_SETTINGS_UPDATE_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }
    


        case types.SEND_USER_ALERT_SETTINGS_UPDATE_SUCCESS:

        
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: true,
                alertsEmails: {...action.response.taken},
                // alert: {...action.response.alertsEmails},
                launcher: action.launcher
                
            }

        case types.SEND_USER_ALERT_SETTINGS_UPDATE_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: action.error
                
            }
            
            
            case types.SEND_USER_ALERT_UNSUBSCRIPTION_REQUEST:

                return  {
    
                    ...state,
                    isFetching: true,
                    isProgressBar: action.payload
                    
                }
        
    
    
            case types.SEND_USER_ALERT_UNSUBSCRIPTION_SUCCESS:
    
            
                return  {
    
                    ...state,
                    isFetching: false,
                    isProgressBar: false,
                    isActionSuccessful: true,
                    alertsEmails: {...action.response.taken},
                    launcher: action.launcher
                    
                }
    
            case types.SEND_USER_ALERT_UNSUBSCRIPTION_FAILURE:
    
                return  {
    
                    ...state,
                    isFetching: false,
                    isProgressBar: false,
                    message: action.error
                    
                } 

        // case types.SEND_USER_ACCOUNT_DELETE_REQUEST:

        //     return  {

        //         ...state,
        //         isFetching: true,
        //         isProgressBar: action.payload
                
        //     }
    


        // case types.SEND_USER_ACCOUNT_DELETE_SUCCESS:

        
        //     return  {

        //         ...state,
        //         isFetching: false,
        //         isProgressBar: false,
        //         isActionSuccessful: true,
        //         accountDeleted: {...action.response.deleteStatus}
                
        //     }

        // case types.SEND_USER_ACCOUNT_DELETE_FAILURE:

        //     return  {

        //         ...state,
        //         isFetching: false,
        //         isProgressBar: false,
        //         message: action.error
                
        //     } 
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