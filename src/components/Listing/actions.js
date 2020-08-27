
import * as types from './types'
import { CALL_API } from '../../middlwares/api'




  export const fetchJobs = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `job`,
          request: 'URL',
          method: 'POST',
          payload: {action: 'getJobsWithThingy',payload: {...search}},
          authencitcated: false,
          // endpoint: `job?${search}`,
          // request: 'URL',
          types: [types.FETCH_JOBS_REQUEST, types.FETCH_JOBS_SUCCESS, types.FETCH_JOBS_FAILURE]
        }
      }



  }

    export const getTextSuggestions = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `job?${search}`,
          request: 'URL',
          types: [types.FETCH_JOBS_TEXT_SUGGESTIONS_REQUEST, types.FETCH_JOBS_TEXT_SUGGESTIONS_SUCCESS, types.FETCH_JOBS_TEXT_SUGGESTIONS_FAILURE]
        }
      }



  }


  export const sendUserJobBookmark = (data,id)=> {

        return {

          [CALL_API]: {
            endpoint: `bookmark`,
            request: 'URL',
            method: 'POST',
            payload: {action:'bookmarkItem',payload:{bookmark: {...data},ID:id}},
            authencitcated: false,
            types: [types.SEND_USER_JOB_BOOKMARK_REQUEST, types.SEND_USER_JOB_BOOKMARK_SUCCESS, types.SEND_USER_JOB_BOOKMARK_FAILURE]
          }
        }

  }

  export const sendUserSearchHistory = (data,id)=>{

    return {

      [CALL_API]: {
        endpoint: `history`,
        request: 'URL',
        method: 'POST',
        payload: {action:'saveHistory',payload:{history: {...data},ID:id}},
        authencitcated: false,
        types: [types.SEND_USER_JOB_SEARCH_HISTORY_REQUEST, types.SEND_USER_JOB_SEARCH_HISTORY_SUCCESS, types.SEND_USER_JOB_SEARCH_HISTORY_FAILURE]
      }
    }


  }
  export const sendUserJobAlert = (data,id)=>{

    return {

      [CALL_API]: {
        endpoint: `history`,
        request: 'URL',
        method: 'POST',
        payload: {action:'saveHistory',payload:{history: {...data},ID:id}},
        authencitcated: false,
        types: [types.SEND_USER_JOB_SEARCH_HISTORY_REQUEST, types.SEND_USER_JOB_SEARCH_HISTORY_SUCCESS, types.SEND_USER_JOB_SEARCH_HISTORY_FAILURE]
      }
    }


  }





  export const fetchJobsByFilter = (search)=> {

    return {

        [CALL_API]: {
          endpoint: `job?${search}`,
          request: 'URL',
          types: [types.FETCH_JOBS_BY_FILTER_REQUEST, types.FETCH_JOBS_BY_FILTER_SUCCESS, types.FETCH_JOBS_BY_FILTER_FAILURE]
        }
      }



  }


  export const saveJobSearchParams = (params)=> {

    console.log('THE SAVEJOBSEARCH ACTION GOT A CALL')

      return {

            type:  types.SAVE_JOB_SEARCH_PARAMS,
            payload: params
          
        }

      


  }

  export const crudJobFilter = (filter)=> {

    // console.log('THE SAVEJOBSEARCH ACTION GOT A CALL')

      return {

            type:  types.CRUD_JOB_FILTER,
            payload: filter
          
        }

      


  }

  