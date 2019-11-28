import {
    REQUEST_ITINERARIES,
    REQUEST_ITINERARIES_SUCCESS,
    REQUEST_ACTIVITIES,
    REQUEST_ACTIVITIES_SUCCESS,
    RESET_ACTIVITIES,
    REQUEST_COMMENTS,
    REQUEST_COMMENTS_SUCCESS,
    POST_COMMENTS,
    POST_COMMENTS_SUCCESS
  } from "../actions/ActionTypes";
  
   
  const initialState = {
    itineraries: [],
    activities: [],
    comments: [],
    message: "ITINERARIES MISSING",
    posts: []
  };
  
  export default function itineraryReducer(state = initialState, action) {
    switch (action.type) {
      case REQUEST_ITINERARIES:
        return Object.assign({}, state, {
          itineraries: [],
          message: action.message || 'FETCHING ITINERARIES'
        });
      case REQUEST_ITINERARIES_SUCCESS:
        return Object.assign({}, state, {
          itineraries: action.itineraries,
          message: action.message || 'ITINERARIES FETCHED'
        });
      case REQUEST_ACTIVITIES:
        return Object.assign({}, state, {
          activities: [],
          message: action.message || 'FETCHING ACTIVITIES'
        });
        case REQUEST_ACTIVITIES_SUCCESS: 
        return Object.assign({}, state, {
          activities: action.activities,
          message: action.message || 'ACTIVITIES FETCHED'

        });
        case RESET_ACTIVITIES: 
        return Object.assign({}, state, {
          activities: [],
          message: 'ACTIVITIES RESETTED'
        })
        case REQUEST_COMMENTS: 
        return Object.assign({}, state, {
          comments: [],
          message: action.message || 'FETCHING COMMENTS'

        });
        case REQUEST_COMMENTS_SUCCESS: 
        return Object.assign({}, state, {
          comments: action.comments,
          message: action.message || 'COMMENTS FETCHED'

        });
        case POST_COMMENTS: 
        return Object.assign({}, state, {
          posts: action.posts,
          message: action.message || 'POSTING COMMENTS'

        });
        case POST_COMMENTS_SUCCESS: 
        return Object.assign({}, state, {
          message: action.message || 'COMMENTS POSTED'

        });

      default:
        return state;
    }
  }
  
  
  