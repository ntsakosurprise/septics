
import * as types from './types'
import * as navigatorActions from '../Navigator/actions'


export const  requestLogout = ()=>{

  return {

    type: types.LOGOUT_REQUEST,
    isFetching: false,
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



export const logoutUser = () =>{

  
  return dispatch => {

    dispatch(requestLogout())
    localStorage.removeItem('user')
    dispatch(receiveLogout())
    dispatch(navigatorActions.navigate('/'))

  }

  
}