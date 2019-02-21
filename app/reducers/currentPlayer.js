import { createEmptyPlayer, populatePlayer } from './../utils';

export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_PLAYER_FIELD':
      const { field, payload } = action.payload;

      return {
        ...state,
        [field]: {
          ...state[field],
          ...payload
        }
      };
    case 'CLEAR_CURRENT_PLAYER':
      return createEmptyPlayer();
    case 'SET_CURRENT_PLAYER':
      return populatePlayer(createEmptyPlayer(), action.payload);
    default:
      return state;
  }
}
