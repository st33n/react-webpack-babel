import expect from 'expect';

describe.only('reducers', () => {
  describe('simple reducer', () => {
    function isLoadingReducer(state, action) {
      return true; // TODO
    }

    it('sets isLoading to true for REQUEST_NEWS_HEADERS', () => {
      var action = { type: 'REQUEST_NEWS_HEADERS'};
      var oldState = undefined;
      var newState = isLoadingReducer(oldState, action);
      expect(newState).toEqual(true);
    });

    it('sets is loading to false for REQUEST_NEWS_HEADERS_SUCCESS', () => {
      var action = { type: 'REQUEST_NEWS_HEADERS'};
      var oldState = undefined;
      var newState = isLoadingReducer(oldState, action);
      expect(newState).toEqual(false);
    });

    it('does not change state for unknown actions', () => {
      var action = { type: 'UNKNOWN_ACTION'};
      var oldState = 'old state';
      var newState = isLoadingReducer(oldState, action);
      expect(newState).toEqual('old state');
    });

  });

  describe('combineReducers', () => {
    // todo
  })

});
describe('basic store', () => {
  it('can dispatch actions', () => {
    const store = createStore(originalState, combineReducers);
    store.dispatch({type: 'REQUEST_NEWS_HEADERS'});
    expect(store.getState()).toEqual(expectedState);
  });
});

describe('middleware', () => {

});