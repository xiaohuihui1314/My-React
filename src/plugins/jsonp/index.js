export default async (url, options) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const overtimeMessage = {message: '请求超时'};
        if (!Object.is(JSON.stringify(options), '{}')) {
            const paramsArray = [];
            Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
            url += '&jsonpCallback=jsonpFun';
        } else {
            url += '?jsonpCallback=jsonpFun';
        }
        script.src = url;
        document.body.appendChild(script);
        const timer = setTimeout(() => {
            reject(overtimeMessage);
        }, 60000);
        window.jsonpFun = (json) => {
            clearTimeout(timer);
            script.parentNode.removeChild(script);
            resolve(json);
        };
    });
};