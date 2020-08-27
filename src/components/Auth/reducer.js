
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.LOGIN_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isAuth: false,
                user: action.creds
         
                
            }

        case types.LOGIN_SUCCESS:

            return  {

                ...state,
                isFetching: false,
                isAuth: true,
                message: ''

                
                
            }

        case types.LOGIN_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isAuth: false,
                message: action.message

            
                
            }

        case types.REGISTER_REQUEST:

       

            return  {

                ...state,
                isFetching: true,
                isAuth: false,
                user: action.creds

                
                
            }


        case types.REGISTER_SUCCESS:

           

            return  {

                ...state,
                isFetching: false,
                isAuth: true,
                message: ''

        
                
            }


        case types.REGISTER_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isAuth: false,
                message: action.message

                
                
            }
           
        case types.LOGOUT_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isAuth: false,
                user: action.creds
                
               
                
                
            }
    
        case types.LOGOUT_SUCCESS:

            return  {

                ...state,
                isFetching: false,
                isAuth: false,
                message: action.message

               
                
            }

        case types.LOGOUT_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isAuth: false,
                message: action.message

                
                
            }
            


        default:
        return state
    }


}