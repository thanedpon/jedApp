import Api from './api';


export default {
    SignIn(payload) {
        return Api().post('/dev/login',
            JSON.stringify({
                username: payload.username,
                password: payload.password,
                lastLogin_At: payload.lastLogin_At
            }))
    },
    getProfile(payload) {
        return Api().get('/dev/protect', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload
            },
        }
        )
    },
    addData(payload) {
        return Api().post('/dev/addData',
            JSON.stringify({
                user_id: payload.id,
                username: payload.username,
                lastname: payload.lastname,
                email: payload.email,
                mobile_phone: payload.mobile_phone,
                status: payload.status
            }), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            }
        })
    },
    updateData(payload) {
        return Api().post('/dev/updateData',
            JSON.stringify({
                id: payload.id,
                firstname: payload.firstname,
                lastname: payload.lastname,
                email: payload.email,
                mobile_phone: payload.mobile_phone,
            }), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            }
        })
    },
    getProfileData(payload) {
        return Api().get('/dev/getDataById', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload
            },
        }
        )
    }

}
