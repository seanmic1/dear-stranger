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
      extend: {},
    },

    conditions: {
      light: '[data-color-mode=light] &',
      dark: '[data-color-mode=dark] &',
    },

    // The output directory for your css system
    outdir: "styled-system",
    
})