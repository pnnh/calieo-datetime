import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import { stylex } from 'vite-plugin-stylex-dev'
import path from 'path'
 
export default defineConfig({
   plugins: [stylex()],
    resolve: {
      alias: [
        {
            find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) 
          }
      ]
    },
  })