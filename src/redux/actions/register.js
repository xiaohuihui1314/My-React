export const REGINSTER_START = "REGINSTER_START";
export const REGINSTER_SUCCESS = "REGINSTER_SUCCESS";
export const REGINSTER_ERROR = "REGINSTER_ERROR";

export function registerStart(register) {
    return {
        type: REGINSTER_START,
        data: register
    }

}
export function registerSuccess(token) {
    return {
        type: REGINSTER_SUCCESS,
        data: token
    }
}
export function registerError(error) {
    return {
        type: REGINSTER_ERROR,
        data: error
    }
}