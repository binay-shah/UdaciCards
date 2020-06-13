import { RECEIVE_ENTRIES, ADD_DECK, ADD_CARD } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES :    
      return {
        ...state,
        ...action.entries,
      }
    case ADD_DECK :
      return {
        ...state,
        [action.title] : {title: action.title, questions: []}
        
      }
    case ADD_CARD :
    return {
      ...state,
      [action.key] : {
        ...state[action.key],
        questions: state[action.key].questions.concat([action.card])
      }
    }
    default :
      return state
  }
}

export default entries