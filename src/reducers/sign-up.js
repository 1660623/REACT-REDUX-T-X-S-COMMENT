import { SIGN_UP_AUTH_TYPES } from '../constants/action-type';
import { showToast } from '../utils/config-toastr';

const initialState = {};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_AUTH_TYPES.SIGN_UP_SUCCESS:
            showToast('success', action.message);
            return { ...state, user: action.payload };
        case SIGN_UP_AUTH_TYPES.SIGN_UP_FAILURE:
            showToast('error', action.message);
            return { ...state, user: action.error };
        default: return { ...state };
    }
}

export default signUpReducer;