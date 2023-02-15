import Axios from 'axios'
import Pusher from 'pusher-js' 
import Echo from 'laravel-echo'

export function setupBackend() {
    _app.backend = {};

    /**
     * Set up back-end's HTTP client
     */
    _app.backend.http = Axios.create({
        baseURL: "http://api.untitled-app.localhost:8000",
        withCredentials: true 
    });

    /**
     * Set up back-end's WebSocket client
     */
    _app.backend.ws = new Echo({
        broadcaster: 'pusher',
        key: '1234',
        wsHost: 'localhost',
        wsPort: 6001,
        forceTLS: false,
        disableStats: true, 
        cluster: 'mt1'
    }); 
}