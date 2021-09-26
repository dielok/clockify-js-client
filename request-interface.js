import Axios from 'axios';
let API_KEY= '';
let API_BASE_END_POINT= 'https://api.clockify.me/api/v1';

const SetKey = (KEY) => {
    CLIENT_API_KEY = KEY;
}
const makeServerRequest = (method, apipath, body) =>{
    var options = {
        method: method || 'GET',
        url: `${ API_BASE_END_POINT }${ apipath }`,
        headers: {
            'X-Api-Key': CLIENT_API_KEY,
            'Content-Type': 'application/json'
        },
        json: true,
        body: body || {}
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);
            resolve(body);
        });
    })
}

const axios = Axios.create({
    baseURL: 'https://api.clockify.me/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export {
    SetKey,
    makeServerRequest,
    axios
}

export default axios;
