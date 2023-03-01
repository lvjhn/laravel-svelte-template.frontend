import { writable } from 'svelte/store' 
import { crud } from '@/helpers/crud' 
import { onClient } from '../helpers/on-client';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store'


function createRoot() {
    /**
     * Set-up Store
     */
    const _name = "root";
    const _default = "";
    const _storage = createLocalStorage();
    const _store = writable(_default); 

    /**
     * Create Store
     */
    let store = persist(_store, _storage, _name);
    
    return { ...store };
}

export let keyboardData = null;

onClient(() => {
    keyboardData = createKeyboardData();
});