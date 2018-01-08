import { GET_TEST } from '../actions/test';

const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'
const REJECTED = '_REJECTED'

const initialState = {
    data: null,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST+PENDING:
            return {...state, loading: true}
            break

        case GET_TEST+FULFILLED:
            return {...state, loading: false, data: action.payload.data.message}
            break

        case GET_TEST+REJECTED:
            return {...state, loading: false}
            break

        default:
            return state;
    }
}
