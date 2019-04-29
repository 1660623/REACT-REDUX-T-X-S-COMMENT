import { combineReducers } from 'redux';
import auth from './login';
import signUpReducer from './sign-up';
import works from './works';
// import newInstanceReducer from './newInstance';
import work from './work';

const rootReducer = combineReducers({
    // auth,
    signUp: signUpReducer,
    works,
    work
    // instances: instancesReducer,
    // instance: instanceReducer,
    // newInstance: newInstanceReducer
})

export default rootReducer;