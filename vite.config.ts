import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig({
  // IMPORTANT: Replace 'your-repo-name' with your actual GitHub repository name!
  // For example, if your repo is github.com/somil/pegasus-web, use '/pegasus-web/'
  base: '/PegasusWebsite/', 
  plugins: [react(), tailwindcss()],
});
