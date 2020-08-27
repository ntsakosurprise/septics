
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchDashStats = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `adash`,
          method: 'POST',
          request: 'URL',
          payload: {ID: search},
          authencitcated: false,
          types: [types.FETCH_DASH_STATS_REQUEST, types.FETCH_DASH_STATS_SUCCESS, types.FETCH_DASH_STATS_FAILURE]
        }
      }

  }


  