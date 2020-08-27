
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchAlertsList = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action:'getAlerts',payload:search},
          authencitcated: false,
          types: [types.FETCH_ALERTS_LIST_REQUEST, types.FETCH_ALERTS_LIST_SUCCESS, types.FETCH_ALERTS_LIST_FAILURE]
        }
      }

  }



  export const setAlertId = (alertID)=> {

    return {

          type: types.SET_ALERT_ID,
          payload: alertID
        
      }

  }



  