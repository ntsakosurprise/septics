import * as config from '../config'
import * as errorActions from '../components/ErrorHandler/actions'

const SERVER = {API: config.server.api,URL: config.server.url }
const TOKEN = {AUTH_TOKEN_ID: config.auth.token}

function callApi(endpoint, authenticated=null,request,payload=null,method='POST',headers,launcher) {

   console.log('THE CALL API GOT A CALL WITH ENDPOINT',endpoint)
   console.log(request)
   console.log(`${SERVER[request]}${endpoint}`)

  let token = localStorage.getItem(TOKEN.AUTH_TOKEN_ID) || null
  let config = null 
  let convert = headers['Content-Type'] === 'application/json' ? true : false
  



  if(authenticated) {
    if(token) {
      if(payload){

        config = {
          method: method,
          headers: headers,
          body: convert ? JSON.stringify(payload) : payload
        }

      }else{

        config = {
          headers: {...headers,Authorization : `Bearer ${token}` }
        }

      }
     
    }
    else {
      throw "No token saved!"
    }
  }else{
    if(payload){

      if(headers['Content-Type'] === 'multipart/form-data'){

        console.log('CONTENT-TYPE IS MULTIPART LET BROWSER SET THIS')
        console.log(headers)

        config = {
          method: method,
          body: payload
        }
  

      }else{

        config = {
          method: method ,
          headers: headers,
          body: convert ? JSON.stringify(payload) : payload
        }
  

      }
     
    }else{

      config = {
        method: method,
        headers: headers
        // headers: { 'Authorization': `Bearer ${token}` }
      }

    }
  }

  console.log('REQUEST TO THE SERVER')
  console.log(SERVER[request] + endpoint)
  console.log(config)
  return fetch(SERVER[request] + endpoint, config)
    .then(response =>
      response.text().then(text => ({ text, response }))
    ).then(({ text, response }) => {
      if (!response.ok) {
        console.log('THE REQUEST WAS NOT SUCCESSFULL')
        // console.log(response)
        console.log(text)
        let err = {
           response: {
            error: text.error || true,
            message: text.message,
            status: response.status
           }
        }
       
        return Promise.reject(err)
      }

      console.log('THE TEXT FROM THE SERVER')
      console.log(text)

      return text
    }).catch(err =>{

       let response = {}
       err.response = response
       err.response.status = 503 
       err.response.message = "service unavailable"

       return Promise.reject(err)
      //  console.log('THE NETWORK ERROR')
      //  console.log(err)
      //  console.log(typeof err)
      // //  throw new Error({error: true,message: 'NETWORK ERROR'})


    } )
}

export const CALL_API = Symbol('Call API')


export default store => next => action => {

  console.log('THE ACTION BEFORE EXTRACTION FROM CALLAPI')
  console.log(action)
  const callAPI = action[CALL_API]

  console.log('THE API MIDDLEWARE IS RUNNING ')

  console.log('THE CURRENT ACTION INSIDE API MIDDLEWARE')
  console.log(action)

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  console.log('THE CALL API ')
  console.log(callAPI)

  let { endpoint,request, types, authenticated,payload,method,launcher=''} = callAPI 
  let isProgress = callAPI.isProgress || false
  let headers = callAPI.headers || {'Content-Type': 'application/json'} 
  

  console.log('THE API AFTER DESTRUCTURING THE CALAPI OBJECT') 
  console.log('THE VALUE OF ISPROGRESS API') 
  console.log(isProgress)

  const [ requestType, successType, errorType ] = types

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes 
  store.dispatch({type: requestType,payload: isProgress}) 

  // return callApi(endpoint, false,request,payload,method,headers,launcher)
  // .then(
  //   (response) =>{

  //     console.log('SERVER RESPONSE')
  //     if(response.error) return store.dispatch(errorActions.runOperationalError(response.response))
  //     next({
  //       response: JSON.parse(response),
  //       authenticated,
  //       launcher,
  //       type: successType
  //     })
  //   }
    
  // )
  // .catch((error)=>{

  //   console.log('THERE WAS A REQUEST ERROR,SERVER LIKELY DOWN')
  //   console.log(error)
  //   console.log(error.response)
  //   console.log(error.response.status)
  //   store.dispatch(errorActions.runOperationalError(error.response))
  //   // next({
  //   //   error: error.message || 'There was an error.',
  //   //   type: errorType
  //   // })

  // })
 

  setTimeout(async ()=>{

    return await callApi(endpoint, false,request,payload,method,headers)
    .then(
      (response) =>{

        console.log('SERVER RESPONSE')
        if(response.error) return next({error: response.message,type: errorType})
        next({
          response: JSON.parse(response),
          authenticated,
          type: successType
        })
      }
      
    )
    .catch((error)=>{

      console.log('THERE WAS A REQUEST ERROR,SERVER LIKELY DOWN')
      next({
        error: error.message || 'There was an error.',
        type: errorType
      })

    })

  },3000)
  
}