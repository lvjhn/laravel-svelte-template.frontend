# laravel-svelte-template.frontend

This is a simple Svelte template for developing front-ends of apps
made with with Laravel (as back-end) and Svelte (as front-end).

It uses SvelteKit in **SPA mode**.

# Set-up Description

* Pre-installed packages (see `package.json` for versions)
  * **Clients** - `axios`, `pusher-js`, and `laravel-echo`
  * **Stylings** - `sass` and `svelte-preprocess`
  * **Drag-and-Drop** - `svelte-dnd-action`
  * **Persistent Stores** -  `svelte-persistent-store`

* UI component libraries like daisyUI, skeleton, flowbite-svelte, svelteui, etc. can be manually installed. 

* [Optional] Mobile : Capacitor Integration
  * This repository can be integrated with Capacitor for developing
    mobile applications.
  * Instructions from third-party source: 
    * https://changenode.com/articles/sveltekit-wcapacitorjs

* How to turn into SPA?
  * Uncomment specified lines in: 
    * `svelte.config.js` 
    * `src/hooks.js` 
    * `routes/layout.js`

## Installation 
```
npx degit lvjhn/laravel-svelte-template.frontend
``` 
then 
```
yarn install 
# or 
npm install
```

## Next Steps 
1. Change app name in `package.json` and `run.sh` 
2. Install third-party UI library like SvelteUI, daisyUI, etc.
3. Install third-party icon sets like [Iconify](https://docs.iconify.design/icon-components/svelte/)
