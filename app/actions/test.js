import axios from 'axios'

export const GET_TEST = 'GET_TEST'

export const getTest = () => ({
    type: GET_TEST,
    payload: axios.get('hello/')
});
