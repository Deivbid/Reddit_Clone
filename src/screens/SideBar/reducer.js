import {
  FETCHING_LIST,
  FETCHED_LIST,
  FAILED_LIST,
  SELECTED_POST,
  REMOVE_POST,
  RESET_LIST
} from './actions'

const initialState = {
  entries: [],
  isFetching: false,
  after: '',
  selectedPost: null
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

    case SELECTED_POST: {
      const newList = state.entries.map((item) => {
        if (item.data.id === payload.data.id) {
          return {
            ...item,
            readed: true
          }
        }
        return item
      })
      return {
        ...state,
        selectedPost: payload,
        entries: newList
      }
    }

    case REMOVE_POST:
      const newList = state.entries.filter((item) => {
        return item.data.id !== payload.data.id
      })

      return {
        ...state,
        entries: newList
      }

    case RESET_LIST:
      return {
        ...state,
        entries: []
      }

    default:
      return state
  }
}

export default EntriesList
