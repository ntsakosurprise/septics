
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchSavedJobsList = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `bookmark`,
          request: 'URL',
          method: 'POST',
          payload: {action:'getBookmarks',payload:search},
          authencitcated: false,
          types: [types.FETCH_SAVED_JOBS_LIST_REQUEST, types.FETCH_SAVED_JOBS_LIST_SUCCESS, types.FETCH_SAVED_JOBS_LIST_FAILURE]
        }
      }

  }


  
  export const deleteSavedJob = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `bookmark`,
          request: 'URL',
          method: 'POST',
          payload: {action:'deleteBookmark',payload:search},
          authencitcated: false,
          types: [types.DELETE_SAVED_JOB_REQUEST, types.DELETE_SAVED_JOB_SUCCESS, types.DELETE_SAVED_JOB_FAILURE]
        }
      }

  }


