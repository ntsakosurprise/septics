
import * as types from './types'

export const requestLogout = ()=> {
    return {
      type: types.LOGOUT_REQUEST,
      isFetching: true,
      isAuth: true
    }
  }


  
export const receiveLogout = ()=>{

    return {
      type: types.LOGOUT_SUCCESS,
      isFetching: false,
      isAuth: false
    }
  }


  export const logoutUser = ()=>{

    return dispatch => {
        
      dispatch(requestLogout())
      localStorage.removeItem('id_token')
      localStorage.removeItem('access_token')
      dispatch(receiveLogout())
    }

  }