export const AD_LIST = "AD_LIST";
export const AD_SUCCESS = "AD_SUCCESS";
export const AD_Error = "AD_Error";
export function get_Ad_List (id) {
    return {
        type: AD_LIST,
        id
    }
}
export function get_AD_Success (ad) {
    return {
        type: AD_SUCCESS,
        ad
    }
}
export function get_AD_Error (error) {
    return {
        type: AD_Error,
        error
    }
}