import { LOGIN_AUTH_TYPES } from "../constants/action-type";
import { apiCall } from '../utils/api-call';

//login 
export const loginRequest = (data, history) => {
    return async dispatch => {
        try {
            const res = await apiCall('/sinhvien/dangnhap', 'POST', data)
            if (!res.data.error) {
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.data.infoUser));
                console.log(res.data.data.infoUser);
                dispatch(loginSuccess(res.data.data.infoUser));
                // dispatch(loginAuth(localStorage.getItem()))
            } else {
                dispatch(loginFailure())
            }
        } catch (err) {
            dispatch(loginFailure())
        }
    }
}

export const loginAuth = (token, user) => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_SUCCESS,
        token: token,
        payload: user,
        message: 'Đăng nhập thành công!'
    }
}


export const loginSuccess = user => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_SUCCESS,
        payload: user,
        message: 'Đăng nhập thành công!'
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_FAILURE,
        message: 'Username hoặc mật khẩu của bạn bị sai!'
    }
}

// export const loginFailure = () => {
//     return {
//         type: LOGIN_AUTH_TYPES.LOGIN_FAILURE,
//         payload: 'invalid username or password'
//     }
// }

// export const logoutReqeust = () => {
//     return dispatch => {

//     }
// }

// export const logout = () => {
//     return {
//         type: LOGIN_AUTH_TYPES.LOGOUT
//     }
// }

export const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return {
        type: LOGIN_AUTH_TYPES.LOGOUT,
        message: 'Bạn đã đăng xuất thành công!'
    }
}