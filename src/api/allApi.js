import Api from './api';
import refLogin from '../config/firebase';


export default {
    SignIn(payload) {
        return Api().post('/dev/login',
            JSON.stringify({
                username: payload.username,
                password: payload.password,
                lastLoginAt: payload.lastLoginAt
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
    createProfile(payload) {
        return Api().post('/dev/createProfile',
            JSON.stringify({
                user_id: payload.id,
                username: payload.username,
                lastname: payload.lastname,
                email: payload.email,
                mobile_phone: payload.mobile_phone,
                status: payload.status,
                createdAt: payload.createdAt
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
    },
    // SignInFirebase(payload) {
    //     return refLogin.set({
    //         user_id: payload.user_id,
    //         lastLoginAt: payload.lastLoginAt
    //     }).then((data) => {
    //         console.log(data)
    //     }).catch((err) => {
    //         console.log('err', err)
    //     })
    // },
}
