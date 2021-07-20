// initial state
export const initialState = {
  audioShouldPlay: false,
  audioMuted: false,
  authenticated: false,
  sidebarVisible: false,
  categories: []
};

// action types
const SHOW_SIDEBAR = "SHOW_SIDEBAR";
const HIDE_SIDEBAR = "HIDE_SIDEBAR";
const PLAY_AUDIO = "PLAY_AUDIO";
const STOP_AUDIO = "STOP_AUDIO";
const MUTE_ALL_AUDIO = "MUTE_ALL_AUDIO";
const UNMUTE_ALL_AUDIO = "UNMUTE_ALL_AUDIO";
const AUTHENTICATE_USER = "AUTHENTICATE_USER";
const SET_CATEGORIES = "SET_CATEGORIES";

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_AUDIO:
      return {
        ...state,
        audioShouldPlay: true
      };
    case STOP_AUDIO:
      return {
        ...state,
        audioShouldPlay: false
      };
    case MUTE_ALL_AUDIO:
      return {
        ...state,
        audioMuted: true
      };
    case UNMUTE_ALL_AUDIO:
      return {
        ...state,
        audioMuted: false
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: true
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        sidebarVisible: true
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: false
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
}

// actions
export const playAudio = () => ({ type: PLAY_AUDIO });
export const stopAudio = () => ({ type: STOP_AUDIO });
export const muteAllAudio = () => ({ type: MUTE_ALL_AUDIO });
export const unmuteAllAudio = () => ({ type: UNMUTE_ALL_AUDIO });
export const authenticateUser = () => ({ type: AUTHENTICATE_USER });
export const showSidebar = () => ({ type: SHOW_SIDEBAR });
export const hideSidebar = () => ({ type: HIDE_SIDEBAR });
export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
});
