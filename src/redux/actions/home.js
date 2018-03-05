export const AD_LIST = "AD_LIST";
export const AD_SUCCESS = "AD_SUCCESS";
export const AD_Error = "AD_Error";
export function get_Ad_List (data) {
    console.log(1);
    return {
        type: AD_LIST
    }
}
export function get_AD_Success (ad) {
    console.log(3);
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