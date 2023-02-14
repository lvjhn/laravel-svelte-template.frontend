import { setupBackend } from '@/clients/backend'

console.log("Hello! - from main.js")

if(typeof window != "undefined") {
    if(window._app == undefined)  
        window._app = {}

    setupBackend(); 
}