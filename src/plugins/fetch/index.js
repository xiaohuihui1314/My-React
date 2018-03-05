const baseUrl = 'http://localhost:3000';
export default  async (type = 'GET', url = '', data = {}) => {
    type = type.toUpperCase();
    url = baseUrl + url;
    if (type === 'GET' && !Object.is(JSON.stringify(data), '{}')) {
        const paramsArray = [];
        Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]));
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    if (window.fetch) {
        let requestConfig = {
            // credentials: 'include'
            // 请求带上cookies，是每次请求保持会话一直
            method: type,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("userToken")
            },
            mode: 'cors',
        };
        if (type === 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            });
        }
        let responseJson = {};
        try {
            const response = await fetch(url, requestConfig);
            responseJson = await response.json();

        } catch (error) {
            throw new Error(error);
        }
        return responseJson;
    } else {
        // 不支持fetch
        return new Promise((resolve, reject) => {
            let requestObj
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }
            let sendData = '';
            if (type === 'POST') {
                sendData = JSON.stringify(data);
            }
            requestObj.open(type, url, true);
            requestObj.setRequestHeader('Content-type', 'application/json');
            requestObj.send(sendData);
            requestObj.onreadystatechange = () => {
                if (requestObj.readyState === 4) {
                    if (requestObj.status === 200) {
                        let obj = requestObj.response || requestObj.responseText;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj);
                    } else {
                        reject(requestObj);
                    }
                }
            };
        });
    }
}