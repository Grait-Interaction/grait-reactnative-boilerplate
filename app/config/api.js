import axios from 'axios'

export const api = ()=>{

    /**
     * PRODUCTION URL SHOULD BE SET HERE
     * @type {String}
     */
    axios.defaults.baseURL = 'https://productiondomain.com/api/';

    if (process.env.NODE_ENV === 'development') {

        /**
         * DEVELOPMENT URL SHOULD BE SET HERE
         * @type {String}
         */
        axios.defaults.baseURL = 'http://devdomain.dev/api/';
    }

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
