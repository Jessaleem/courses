// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'), //import dinamically every element of the project
  },
  css: ['assets/main.scss'], //Add the CSS file globally

  //configuration for tailwindcss for PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
