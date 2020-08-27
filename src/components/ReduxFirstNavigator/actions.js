
import * as types from './types'

export const push = (href) => ({  type: types.PUSH,  payload: href,});
export const replace = (href) => ({  type: types.REPLACE,  payload: href,});
export const go = (index) => ({  type: types.GO,  payload: index,});
export const goBack = () => ({  type: types.GO_BACK,});
export const goForward = () => ({  type: types.GO_FORWARD,});

export const locationChange = ({ pathname, search, hash }) => ({  

                        type: types.LOCATION_CHANGE,  
                        payload: {    pathname,    search,    hash,  },

                    });