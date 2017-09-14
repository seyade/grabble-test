import * as types from '../actions/actionTypes';

let initialState = {
  texts: [],
  products: []
};

export default function grabbleTextReducer(state = initialState.texts, action) {
  switch(action.type) {
    case types.SAVE_TEXT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.text),
      ];

    default:
      return state;
  }
}
