const path = require("path");

module.exports = function ( way) {
    // 日期
    const V_date = (function () {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        let minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '/' + m + '/' + d + '   ' + h + '：' + minute+'：'+s;
    })();
    return path.resolve(__dirname, '../'+way+'/' + V_date + '/');
};