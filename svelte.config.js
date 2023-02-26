import preprocess from "svelte-preprocess";
// import autoAdapter from "@sveltejs/adapter-auto";
import staticAdapter from '@sveltejs/adapter-static'
import nodeAdapter from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: nodeAdapter(), 

    /** Use static adapter instead */
    // adapter: staticAdapter({
    //   fallback: 'index.html'
    // }) 
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
