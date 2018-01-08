import axios from 'axios'
import { GET_USER, LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/user';

const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'
const REJECTED = '_REJECTED'

const initialState = {
    data: null,
    loading: false,
    token: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER+PENDING:
            return {...state, loading: true}
            break

        case GET_USER+FULFILLED:
            return {...state, loading: false, data: action.payload.data}
            break

        case GET_USER+REJECTED:
            return {...state, loading: false}
            break

        case LOGIN_USER+PENDING:
            return {...state, loading: true}
            break

        case LOGIN_USER+FULFILLED:
            axios.defaults.headers['Authorization'] = 'Bearer '+action.payload.data.token
            return {...state, loading: false, token: action.payload.data.token}
            break

        case LOGIN_USER+REJECTED:
            return {...state, loading: false}
            break

        case SIGNUP_USER+PENDING:
            return {...state, loading: true}
            break

        case SIGNUP_USER+FULFILLED:
            return {...state, loading: false}
            break

        case SIGNUP_USER+REJECTED:
            return {...state, loading: false}
            break

        case LOGOUT_USER:
            axios.defaults.headers['Authorization'] = ''
            return {...initialState}

        default:
            return state;
    }
}
