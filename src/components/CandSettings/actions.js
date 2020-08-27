
import * as types from './types'
import { CALL_API } from '../../middlwares/api'



// export const fetchUserProfileSettings = (data)=> {

//   console.log('FETCHUSERPROFILESETTINGS')
//   console.log(data)

//   return {

//       [CALL_API]: {
//         endpoint: `profile`,
//         request: 'URL',
//         method: 'POST',
//         payload: {action: 'getProfile',payload: {...data}},
//         authencitcated: false,
//         types: [types.FETCH_USER_PROFILE_SETTINGS_REQUEST, types.FETCH_USER_PROFILE_SETTINGS_SUCCESS, types.FETCH_USER_PROFILE_SETTINGS_FAILURE]
//       }
//     }

//  }

// export const sendUserAvatarUpdate = (data)=> {

//     return {

//         [CALL_API]: {
//           endpoint: `profile`,
//           request: 'URL',
//           method: 'POST',
//           headers: {'Content-Type': 'multipart/form-data'},
//           payload: data,
//           authencitcated: false,
//           isProgress: true,
//           types: [types.SEND_USER_AVATAR_UPDATE_REQUEST, types.SEND_USER_AVATAR_UPDATE_SUCCESS, types.SEND_USER_AVATAR_UPDATE_FAILURE]
//         }
//       }

//   }


  
//   export const sendUserProfileUpdate = (data,id)=> {

//     return {

//         [CALL_API]: {
//           endpoint: `profile`,
//           request: 'URL',
//           method: 'POST',
//           payload: {action: 'updateUser',payload: {update: {...data},ID:id}},
//           authencitcated: false,
//           isProgress: true,
//           types: [types.SEND_USER_PROFILE_UPDATE_REQUEST, types.SEND_USER_PROFILE_UPDATE_SUCCESS, types.SEND_USER_PROFILE_UPDATE_FAILURE]
//         }
//       }

//   }


export const fetchUserAlertsSubscriptions = (data)=> {

  console.log('FETCHUSERPROFILESETTINGS')
  console.log(data)

  return {

      [CALL_API]: {
        endpoint: `inalerts`,
        request: 'URL',
        method: 'POST',
        payload: {action: 'getAlertsSubscriptions',payload: {...data}},
        authencitcated: false,
        types: [types.FETCH_USER_ALERTS_SUBSCRIPTIONS_REQUEST, types.FETCH_USER_ALERTS_SUBSCRIPTIONS_SUCCESS, types.FETCH_USER_ALERTS_SUBSCRIPTIONS_FAILURE]
      }
    }

 }

  export const sendUserAlertSettingsUpdate = (data,id,task,launcher)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action: task,payload: {update: {...data},ID:id}},
          authencitcated: false,
          isProgress: true,
          launcher: launcher || '',
          types: [types.SEND_USER_ALERT_SETTINGS_UPDATE_REQUEST, types.SEND_USER_ALERT_SETTINGS_UPDATE_SUCCESS, types.SEND_USER_ALERT_SETTINGS_UPDATE_FAILURE]
        }
      }

  }

  export const sendUserNewAlert = (data,id,task,launcher)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action: task,payload: {save: {...data},ID:id}},
          authencitcated: false,
          isProgress: true,
          launcher: launcher || '',
          types: [types.SEND_USER_NEW_ALERT_REQUEST,types.SEND_USER_NEW_ALERT_SUCCESS,types.SEND_USER_NEW_ALERT_FAILURE]
        }
      }

  }

  export const unsubscribeFromAlerts = (data,id,task,launcher)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action: task,payload: {delete: {...data},ID:id}},
          authencitcated: false,
          isProgress: true,
          launcher: launcher || '',
          types: [types.SEND_USER_ALERT_UNSUBSCRIPTION_REQUEST,types.SEND_USER_ALERT_UNSUBSCRIPTION_SUCCESS,types.SEND_USER_ALERT_UNSUBSCRIPTION_FAILURE]
        }
      }

  }


  // export const sendUserAccountDelete = (data)=> {

  //   return {

  //       [CALL_API]: {
  //         endpoint: `profile`,
  //         request: 'URL',
  //         method: 'POST',
  //         payload: data,
  //         authencitcated: false,
  //         isProgress: true,
  //         types: [types.SEND_USER_ACCOUNT_DELETE_REQUEST, types.SEND_USER_ACCOUNT_DELETE_SUCCESS, types.SEND_USER_ACCOUNT_DELETE_FAILURE]
  //       }
  //     }

  // }

export const removeNotification = ()=>{

  return {

    type: types.UNSET_NOTIFICATION_DISPLAY,
    payload: false
  }
}


  