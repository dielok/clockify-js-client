import axios from '../request-interface.js';

const get = () => {
    return axios.get(`/user`).then((response) => {
        return response.data;
    });
}

export default {
    get
}