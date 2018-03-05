export const AD_LIST = "AD_LIST";
export const AD_SUCCESS = "AD_SUCCESS";
export const AD_Error = "AD_Error";
export function getADList (data) {
    return {
        type: AD_LIST,
        data: data
    }
}
export function ADSuccess (token) {
    console.log(3);
    return {
        type: AD_SUCCESS,
        data: token
    }
}
export function ADError (error) {
    return {
        type: AD_Error,
        data: error
    }
}