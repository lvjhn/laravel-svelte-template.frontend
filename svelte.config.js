import preprocess from "svelte-preprocess";
// import autoAdapter from "@sveltejs/adapter-auto";
import staticAdapter from '@sveltejs/adapter-static'


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: autoAdapter(), 

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
