import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default() => {
    return axios.create({
        baseURL: 'https://379ea9d8d342.ngrok.io'
    })
}


