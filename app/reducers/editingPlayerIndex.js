export default function (state = [], action) {
  switch (action.type) {
    case 'SET_EDITING_PLAYER_INDEX':
      return action.payload;
    case 'DISABLE_PLAYER_EDITING':
      return null;
    default:
      return state;
  }
}
