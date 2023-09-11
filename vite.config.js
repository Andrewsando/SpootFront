import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = {
  plugins: [react()],
  base: "/"
};

if (process.env.githubDeploy) {
  config.base = "/";
}
// https://vitejs.dev/config/
export default defineConfig(config)
