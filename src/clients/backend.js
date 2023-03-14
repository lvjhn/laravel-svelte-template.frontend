import Axios from 'axios'
import Pusher from 'pusher-js' 
import Echo from 'laravel-echo'

export function setupBackend() {
    let client = _app.backend = {};

    /**
     * Set up back-end's HTTP client
     */
    client.http = Axios.create({
        baseURL: "http://api.untitled-app.localhost:8080/api",
        withCredentials: true 
    });

    /**
     * Set up back-end's WebSocket client
     */
    client.ws = new Echo({
        broadcaster: 'pusher',
        key: '1234',
        wsHost: '127.0.0.1',
        wsPort: 6001,
        forceTLS: false,
        disableStats: true, 
        cluster: 'mt1'
    }); 
}