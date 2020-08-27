
import * as types from './types'
import * as props from './props'
import { actions } from 'reapop'




export default (state = props, action)=>{

    switch (action.type) {


        case types.FETCH_USER_PROFILE_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload,
                isProfile: true
                
            }

        case types.FETCH_USER_PROFILE_SUCCESS:

            
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                profile: {...action.response}
               
              
               
                
            }

        case types.FETCH_USER_PROFILE_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                message: action.error
                
            }
           

      
        
        case types.SEND_USER_AVATAR_UPDATE_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload,
                isProfile: true
                
            }

        case types.SEND_USER_AVATAR_UPDATE_SUCCESS:

            
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                isActionSuccessful: true,
                profile: {...state.profile,url: action.response.url,profileUrl: action.response.profileUrl},
                launcher: action.launcher
                
            }

        case types.SEND_USER_AVATAR_UPDATE_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                message: action.error
                
            }

        case types.SEND_USER_PROFILE_UPDATE_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProfile: true,
                isProgressBar: action.payload
                
            }
    


        case types.SEND_USER_PROFILE_UPDATE_SUCCESS:

        
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: true,
                isProfile: true,
                profile: {...state.profile,...action.response.update},
                launcher: action.launcher
               
                
            }

        case types.SEND_USER_PROFILE_UPDATE_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: true,
                message: action.error
                
            } 


      

        case types.SEND_USER_ACCOUNT_DELETE_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }
    


        case types.SEND_USER_ACCOUNT_DELETE_SUCCESS:

        
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: true,
                accountDeleted: {...action.response.deleteStatus},
                launcher: action.launcher
            }

        case types.SEND_USER_ACCOUNT_DELETE_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: action.error
                
            } 
        case types.UNSET_NOTIFICATION_DISPLAY:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: action.payload
                
            } 

        case types.UNSET_IS_PROFILE:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isProfile: false,
               
                
            } 
    
    
        default:
        return state
    }


}



