import Api from './api';


export default {
    SignIn(payload) {
        return Api().post('/dev/login',
        JSON.stringify({
            username: payload.username,
            password: payload.password
        }))
    },
}
