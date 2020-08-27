
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchAlertById = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action:'getAlertById',payload:{ID: search.ID,alertID: search.alertID}},
          authencitcated: false,
          types: [types.FETCH_MANAGE_ALERT_REQUEST, types.FETCH_MANAGE_ALERT_SUCCESS, types.FETCH_MANAGE_ALERT_FAILURE]
        }
      }

  }


  export const sendUserAlertUpdateData = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action:'updateAlert',payload:{ID: search.ID,alertID: search.alertID,update: search.update}},
          authencitcated: false,
          isProgress: true,
          types: [types.SEND_USER_ALERT_UPDATE_REQUEST, types.SEND_USER_ALERT_UPDATE_SUCCESS, types.SEND_USER_ALERT_UPDATE_FAILURE]
        
      }

  }
}

export const setAlertUpdateData = (update)=> {

  return {

        type: types.SET_ALERT_UPDATE_DATA,
        payload: update

      
    }

}

export const removeNotification = ()=>{

  return {

    type: types.UNSET_NOTIFICATION_DISPLAY,
    payload: false
  }
}


