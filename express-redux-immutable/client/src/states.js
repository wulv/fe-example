import { combineReducers } from 'redux-immutablejs';
import { reducer as reduxFormReducer } from 'redux-form/immutable';

import pageIndexState from './states/pageIndexState';
import PageCreateState from './states/pageCreateState';

export default combineReducers({
  pageIndex: pageIndexState,
  pageCreate: PageCreateState,
  form: reduxFormReducer
});
