import { setupBackend } from '@/clients/backend'
import { setupSampleAPI } from './clients/sample-api';
import { onClient } from './helpers/on-client';

console.log("Hello! - from main.js")

/**
 * Set-up application context for client. 
 */
onClient(() => {
    if(window._app == undefined)
        window._app = {}; 

    setupBackend(); 
    setupSampleAPI();
});