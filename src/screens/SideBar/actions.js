import axios from 'axios'
import { api } from '../../constants'

export const FETCHING_LIST = 'FETCHING_LIST'
export const FETCHED_LIST = 'FETCHED_LIST'
export const FAILED_LIST = 'FAILED_LIST'

export const SELECTED_POST = 'SELECTED_POST'

export const REMOVE_POST = 'REMOVE_POST'

export const RESET_LIST = 'RESET_LIST'

export const startSearchList = () => ({
  type: FETCHING_LIST
})

export const failedSearchList = () => ({
  type: FAILED_LIST
})

export const getList = (nextPage = '') => (dispatch) => {
  dispatch(startSearchList())
  axios
    .get(`${api}${nextPage}`)
    .then(({ data: { data } }) => {
      dispatch({
        type: FETCHED_LIST,
        payload: data
      })
    })
    .catch(() => {
      dispatch(failedSearchList())
    })
}

export const selectPost = (post = {}) => {
  return {
    type: SELECTED_POST,
    payload: post
  }
}

export const removePost = (post = {}) => {
  return {
    type: REMOVE_POST,
    payload: post
  }
}

export const resetList = () => {
  return {
    type: RESET_LIST
  }
}
