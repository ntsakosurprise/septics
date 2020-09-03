
import * as types from './types'
import { CALL_API } from '../../middlwares/api'

export const sendContactData = (data)=> {

    console.log('SEND USER CONTACT INFORMATION')
    console.log(data)
  
    return {
  
        [CALL_API]: {
          endpoint: `brand`,
          request: 'URL',
          method: 'POST',
          payload: {action: 'sendQueryMessage',payload: {contacInfo: {...data}}},
          isProgress: true,
          authencitcated: false,
          types: [types.SEND_CONTACT_DATA_REQUEST, types.SEND_CONTACT_DATA_SUCCESS, types.SEND_CONTACT_DATA_FAILURE]
        }
      }
  
}



export const removeNotification = ()=>{

    return {
  
      type: types.UNSET_NOTIFICATION_DISPLAY,
      payload: false
    }
  }
  
