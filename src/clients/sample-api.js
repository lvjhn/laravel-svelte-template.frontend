import Axios from 'axios'
import Pusher from 'pusher-js' 
import Echo from 'laravel-echo'

/**
 * Sample API from https://jsonplaceholder.typicode.com/
 */

export function setupSampleAPI() {
    _app.sampleAPI = {};

    /**
     * Set up back-end's HTTP client
     */
    _app.sampleAPI.http = Axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
        withCredentials: true 
    });
}