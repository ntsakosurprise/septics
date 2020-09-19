
import * as types from './types'
import * as props from './props'




export default (state = props, action)=>{

    switch (action.type) {


      

      
        
        case types.SEND_CONTACT_DATA_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isProgressBar: action.payload
                
            }

        case types.SEND_CONTACT_DATA_SUCCESS:

            
            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                isActionSuccessful: true,
                feedbackMessage: {...action.response.message},
               
                
            }

        case types.SEND_CONTACT_DATA_FAILURE:

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



        case types.UNSET_CURRENT_SENDER:

            return  {

                ...state,
                isFetching: false,
                isProgressBar: false,
                message: ''
                
            } 
    
    
        
    
    
        default:
        return state
    }


}