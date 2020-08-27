import * as types from './types'



export const runOperationalError = (err)=> {

   console.log('THE RUNOPERATIONAL')
   console.log(err)
   console.log(err.status)
   
   switch(err.status){

   

     case 400: return runOperationalError400(err)
     case 401: return runOperationalError401(err)
     case 403: return runOperationalError403(err)
     case 404: return runOperationalError404(err)
     case 408: return runOperationalError408(err)
     case 500: return runOperationalError500(err)
     case 503: return runOperationalError503(err)
     default: return runNoneOperationalError(err)
    
   }
 
}


export const runOperationalError404 = (err)=> {

  return {

       type: types.OPERATIONAL_ERROR_404,
       payload: '/404'
    }

}

export const runOperationalError500 = (err)=> {

  return {

    type: types.OPERATIONAL_ERROR_500,
    payload: '/500'
 }

}
export const runOperationalError503 = (err)=> {

  console.log('THE 503 ERROR IS RUNNING')

  // return (dispatch)=>{

  //   console.log('THE 503 DISPATCH')
  //   console.log(dispatch)
  //   dispatch({
  //     type: types.OPERATIONAL_ERROR_503,
  //     payload: '/503'
  //  })

  // }

  return {
    type: types.OPERATIONAL_ERROR_503,
    payload: '/503'
 }

}

export const runOperationalError403 = (err)=> {

  return {

    type: types.OPERATIONAL_ERROR_403,
    payload: '/403'
 }

}

export const runOperationalError400 = (err)=> {

  return {

    type: types.OPERATIONAL_ERROR_400,
    payload: '/400'
 }

}

export const runOperationalError401 = (err)=> {

  return {

       type: types.OPERATIONAL_ERROR_401,
       payload: '/401'
    }

}
export const runOperationalError408 = (err)=> {

  return {

       type: types.OPERATIONAL_ERROR_408,
       payload: '/408'
    }

}

export const runNoneOperationalError = (err)=>{

      return {

        type: types.NONE_OPERATIONAL_ERROR,
        error: err.message

      }
}

  
 
  
