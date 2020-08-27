
import * as types from './types'
import * as props from './props'



export default (state = null , action)=>{

    switch (action.type) {

        case types.LOGOUT_REQUEST:

        return Object.assign({}, state, {
            isFetching: true,
            isAuth: false,
            user: action.creds
        })

        case types.LOGOUT_SUCCESS:

        return Object.assign({}, state, {
            isFetching: false,
            isAuth: true,
            errorMessage: ''
        })

        case types.LOGOUT_FAILURE:

        return Object.assign({}, state, {
            isFetching: false,
            isAuth: false,
            errorMessage: action.message
        })

       
        default:
        return state
    }


}