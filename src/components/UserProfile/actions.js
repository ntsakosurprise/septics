import * as types from './types'
import { CALL_API } from '../../middlwares/api'



export const fetchUserProfile = (data)=> {

  console.log('FETCHUSERPROFILESETTINGS')
  console.log(data)

  return {

      [CALL_API]: {
        endpoint: `profile`,
        request: 'URL',
        method: 'POST',
        payload: {action: 'getProfile',payload: {...data}},
        authencitcated: false,
        types: [types.FETCH_USER_PROFILE_REQUEST, types.FETCH_USER_PROFILE_SUCCESS, types.FETCH_USER_PROFILE_FAILURE]
      }
    }

}


export const sendUserAvatarUpdate = (data,launcher='')=> {

  return {

      [CALL_API]: {
        endpoint: `profile`,
        request: 'URL',
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        payload: data,
        authencitcated: false,
        isProgress: true,
        launcher: launcher,
        types: [types.SEND_USER_AVATAR_UPDATE_REQUEST, types.SEND_USER_AVATAR_UPDATE_SUCCESS, types.SEND_USER_AVATAR_UPDATE_FAILURE]
      }
    }

}

  
  export const sendUserProfileUpdate = (data,id,launcher)=> {

    return {

        [CALL_API]: {
          endpoint: `profile`,
          request: 'URL',
          method: 'POST',
          payload: {action: 'updateUser',payload: {update: {...data},ID:id}},
          authencitcated: false,
          isProgress: true,
          launcher: launcher || '',
          types: [types.SEND_USER_PROFILE_UPDATE_REQUEST, types.SEND_USER_PROFILE_UPDATE_SUCCESS, types.SEND_USER_PROFILE_UPDATE_FAILURE]
        }
      }

  } 

  export const unsetIsProfile = ()=>{

    return {
  
      type: types.UNSET_IS_PROFILE,
      payload: false
    }
  }
  
