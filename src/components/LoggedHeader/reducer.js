
import * as types from './types'
import * as props from './props'



export default (state = props,action)=>{


       
            switch (action.type) {


                // case types.FETCH_USER_PROFILE_SETTINGS_REQUEST:
        
                //     return  {
        
                //         ...state,
                //         isFetching: true,
                //         isProgressBar: action.payload
                        
                //     }
        
                // case types.FETCH_USER_PROFILE_SETTINGS_SUCCESS:
        
                    
                //     return  {
        
                //         ...state,
                //         isFetching: false,
                //         isProgressBar: false,
                //         profile: {...action.response}
                       
                      
                       
                        
                //     }
        
                case types.TEST:
        
                    return  {
        
                        ...state,
                        isFetching: false,
                        // isProgressBar: false,
                        // message: action.error
                        
                    }
                   
        
                default:
                    return state
        }

}