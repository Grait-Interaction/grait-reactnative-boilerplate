import axios from 'axios'

export const PENDING = '_PENDING'
export const OK = '_FULFILLED'
export const BAD = '_REJECTED'

export const api = () => {

    /**
     * PRODUCTION URL SHOULD BE SET HERE
     * @type {String}
     */
    axios.defaults.baseURL = 'https://productiondomain.com/api/'

    if (__DEV__) {

        /**
         * DEVELOPMENT URL SHOULD BE SET HERE
         * @type {String}
         */
        axios.defaults.baseURL = 'http://devdomain.test/api/'
    }

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}