import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = {
  plugins: [react()],
}
if(process.env.githubDeploy){
  config.base = "/SpootChat-CLIENT/"
}
// https://vitejs.dev/config/
export default defineConfig(config)
