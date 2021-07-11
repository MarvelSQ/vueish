import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const { REPOSITORY_PATH, OWNER } = process.env;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: `/${REPOSITORY_PATH.replace(`${OWNER}/`,'')}/`,
});
