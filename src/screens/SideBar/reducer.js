import { FETCHING_LIST, FETCHED_LIST, FAILED_LIST } from './actions'

const initialState = {
  entries: [],
  isFetching: false,
  after: ''
}

const EntriesList = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCHING_LIST:
      return {
        ...state,
        isFetching: true
      }

    case FETCHED_LIST: {
      //With this, we can identify if an item is readed or not
      const newList = payload.children.map((item) => {
        return {
          ...item,
          readed: false
        }
      })
      return {
        ...state,
        entries: [...state.entries, ...newList],
        after: payload.after,
        isFetching: false
      }
    }

    case FAILED_LIST:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}

export default EntriesList
