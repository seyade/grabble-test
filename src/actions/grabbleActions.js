import * as types from 'actionsTypes';
import axios from 'axios';

const APIurl = 'https://59ba5cac36acf20011fe29ef.mockapi.io/api/v1/articles';

export function saveTextSuccess(text) {
  return {
    type: types.SAVE_TEXT_SUCCESS,
    text: text.data,
  };
}

export function saveText(text) {
  return (dispatch, getState) => {
    return axios.post(APIurl, text)
      .then(savedText => {
        dispatch(saveRoleSuccess(savedText));
        console.log('Get state: ', getState());
      })
      .catch(error => {
        if (error) {
          console.log('Oops! Text not saved.', error);
        }
      });
  };
}
