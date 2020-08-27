
import * as types from './types'
import * as navigatorActions from '../Navigator/actions'

export const  requestLogin = (creds)=>{
    return {
      type: types.LOGIN_REQUEST,
      isFetching: true,
      isAuth: false,
      creds
    }
  }
  
  export const receiveLogin = (user)=> {

    return {
      
      type: types.LOGIN_SUCCESS,
      isFetching: false,
      isAuth: true,
      user: user
    }



  }
  
  export const loginError = (message)=>{

    return {
      type: types.LOGIN_FAILURE,
      isFetching: false,
      isAuth: false,
      message: message
    }

  }

  export const  requestRegister = (creds)=>{
    return {
      type: types.REGISTER_REQUEST,
      isFetching: true,
      isAuth: false,
      creds
    }
  }
  
  export const receiveRegister = (user)=> {

    return {
      type: types.REGISTER_SUCCESS,
      isFetching: false,
      isAuth: true,
      user: user
    }

  }
  
  export const registerError = (message)=>{


    return dispatch => dispatch({

      type: types.REGISTER_FAILURE,
      isFetching: false,
      isAuth: false,
      message: message
    })

  }

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
  
  
  
  

 


  export const registerUser = (creds)=>{
  
    console.log('THE CREDS')
    console.log(creds)
    creds = JSON.stringify(creds)
    let config = {

      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: creds

    }
  
    return dispatch => {

      // We dispatch requestLogin to kickoff the call to the API
      dispatch(requestRegister(creds))
  
      return fetch('http://localhost:3000/register', config)
        .then((response) =>{
          console.log('THE RESPONSE FROM THE SERVER')
          console.log(response)
            return response.json().then(user => ({ user, response }))}
            ).then(({ user, response }) =>  {
              console.log('THE RETURNED USED FROM THE SERVER AS PROCESSED BY fetch api')
              console.log(user)
          if (!response.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(registerError(user.message))
            return Promise.reject(user)
          } else {
            // If login was successful, set the token in local storage

            if(user.error){

              console.log('THE REGISTER FAILURE')
              console.log(user)
               dispatch(registerError(user.message))

            }else{

              localStorage.setItem('user', user)
            
              // Dispatch the success action
              dispatch(receiveRegister(user))

            }
            
          }
        }).catch((err) =>{ 

          console.log("Error:REGISTER USER:registerUser action createro ", err)
          
        })
    }


  }

  export const loginUser = (creds)=>{

    console.log('THE CREDS')
    console.log(creds)
    creds = JSON.stringify(creds)
    let config = {

      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: creds

    }
  
  
    return dispatch => {

      // We dispatch requestLogin to kickoff the call to the API
      dispatch(requestLogin(creds))
  
      return fetch('http://localhost:3000/login', config)
      .then((response) =>{
        console.log('THE RESPONSE FROM THE SERVER')
        console.log(response)
          return response.json().then(user => ({ user, response }))}
          ).then(({ user, response }) =>  {
            console.log('THE RETURNED USED FROM THE SERVER AS PROCESSED BY fetch api')
            console.log(user)
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage

          if(user.error){

            console.log('THE REGISTER FAILURE')
            console.log(user)
             dispatch(loginError(user.message))

          }else{

            localStorage.setItem('user', user)
          
            // Dispatch the success action
            dispatch(receiveLogin(user))

          }
          
        }
      }).catch((err) =>{ 

        console.log("Error:REGISTER USER:registerUser action createro ", err)
        // dispatch(loginError(user.message))
        
      })
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