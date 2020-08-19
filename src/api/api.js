import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default() => {
    return axios.create({
        baseURL: 'http://localhost:3000'
    })
}


