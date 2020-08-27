
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchAlertCats = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `inalerts`,
          request: 'URL',
          method: 'POST',
          payload: {action:'getAlertCategories',payload:{ID: search}},
          authencitcated: false,
          types: [types.FETCH_ALERTS_CATS_REQUEST, types.FETCH_ALERTS_CATS_SUCCESS, types.FETCH_ALERTS_CATS_FAILURE]
        }
      }

  }


  export const setAlertsCategory = (category)=> {

    return {

          type: types.SET_ALERTS_CATEGORY,
          payload: category
        
      }

  }


  