import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0%' },
          '100%': {  opacity: '90%'  }
          }
        }
      },
    },

    conditions: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &',
    },

    // The output directory for your css system
    outdir: "styled-system",
    
})