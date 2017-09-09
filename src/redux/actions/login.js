export const VERIFY_TOKEN = "VERIFY_TOKEN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export function verifyToken(token) {
    return {
        type: VERIFY_TOKEN,
        data: token
    }

}

export function loginStart(login) {
    return {
        type: LOGIN_START,
        data: login
    }

}
export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        data: token
    }
}
export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        data: error
    }
}