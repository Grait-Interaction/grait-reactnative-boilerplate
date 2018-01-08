import axios from 'axios'

export const GET_USER = 'GET_USER'
export const SIGNUP_USER = 'SIGNUP_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const getUser = () => ({
    type: GET_USER,
    payload: axios.get('user/')
});

export const signUp = (form)=>({
    type: SIGNUP_USER,
    payload: axios.post('auth/signup/', form)
})

export const login = (form)=>({
    type: LOGIN_USER,
    payload: axios.post('auth/login/', form)
})

export const logout = (form)=>({
    type: LOGOUT_USER,
    payload: null
})
