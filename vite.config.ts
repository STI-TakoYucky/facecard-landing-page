import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],root: "./src", // Set your project root (change if needed)
  build: {
    outDir: "dist", // Output folder for production builds
  },
  base: 'facecard-landing-page', // Set base to the repo name
})