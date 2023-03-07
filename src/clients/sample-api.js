import Axios from 'axios'

/**
 * Sample API from https://jsonplaceholder.typicode.com/
 */

export function setupSampleAPI() {
    let client = _app.sampleAPI = {};

    /**
     * Set up sample API's HTTP client
     */
    client.http = Axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
        withCredentials: true 
    });

}