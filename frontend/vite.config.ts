/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
  //   },
  // }, 
  test: {
    globals: true,
    environment: "jsdom",
  },
})
