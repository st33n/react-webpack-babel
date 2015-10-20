//function isLoadingReducer(state=false, action) {
//  switch(action.type) {
//    case 'REQUEST_NEWS_HEADERS':
//      return true;
//    case 'REQUEST_NEWS_HEADERS_SUCCESS':
//      return false;
//    default:
//      return state;
//  }
//}
//
//
//
//// Notice the redux combineReducers does not work like this
//function simpleCombineReducers(state, action) {
//  return Object.assign({}, state, {
//    a: reducerA(state.a, action),
//    b: reducerB(state.b, action),
//  });
//}
