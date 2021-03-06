export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  /*  token:
    "3OVB3iYtgIF8qPxQpUL7Kou_2Xvmxt2h34PwCceJzWIaN79cHB90pWNm1gGNjagkelag7u7uuMT4bu8IyRdqBCyUIxQelFWDdORZzTWsDjxhu41iYOF0C4bJE0xg",  */
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
