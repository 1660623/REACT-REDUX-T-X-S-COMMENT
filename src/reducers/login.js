// import { LOGIN_AUTH_TYPES } from '../constants/action-type';
// import { showToast } from '../utils/config-toastr';
// const initialState = {};

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN_AUTH_TYPES.LOGIN_SUCCESS:
//             showToast('success', action.message);
//             return { ...state, authenticated: true, ...action };
//         case LOGIN_AUTH_TYPES.LOGIN_FAILURE:
//             showToast('error', action.message);
//             return { ...state, message: action.message };
//         case LOGIN_AUTH_TYPES.LOGOUT:
//             showToast('info', action.message);
//             return { ...state, authenticated: false, user: null };
//         default: return { ...state };
//     }
// }

// export default authReducer;