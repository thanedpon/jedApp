import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default() => {
    return axios.create({
        baseURL: 'https://b8bb602847b4.ngrok.io'
    })
}


