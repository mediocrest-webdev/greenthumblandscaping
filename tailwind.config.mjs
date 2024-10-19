/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'text': {
          50: 'hsl(120, 36%, 5%)',
          100: 'hsl(120, 37%, 10%)',
          200: 'hsl(120, 37%, 20%)',
          300: 'hsl(120, 37%, 30%)',
          400: 'hsl(120, 37%, 40%)',
          500: 'hsl(120, 37%, 50%)',
          600: 'hsl(120, 37%, 60%)',
          700: 'hsl(120, 37%, 70%)',
          800: 'hsl(120, 37%, 80%)',
          900: 'hsl(120, 37%, 90%)',
          950: 'hsl(120, 36%, 95%)',
        },
        'background': {
          50: 'hsl(120, 44%, 5%)',
          100: 'hsl(120, 45%, 10%)',
          200: 'hsl(120, 43%, 20%)',
          300: 'hsl(120, 44%, 30%)',
          400: 'hsl(120, 44%, 40%)',
          500: 'hsl(120, 44%, 50%)',
          600: 'hsl(120, 44%, 60%)',
          700: 'hsl(120, 44%, 70%)',
          800: 'hsl(120, 43%, 80%)',
          900: 'hsl(120, 45%, 90%)',
          950: 'hsl(120, 44%, 95%)',
        },
        'primary': {
          50: 'hsl(120, 46%, 5%)',
          100: 'hsl(118, 49%, 10%)',
          200: 'hsl(119, 47%, 20%)',
          300: 'hsl(118, 48%, 30%)',
          400: 'hsl(118, 48%, 40%)',
          500: 'hsl(118, 48%, 50%)',
          600: 'hsl(118, 48%, 60%)',
          700: 'hsl(118, 48%, 70%)',
          800: 'hsl(119, 47%, 80%)',
          900: 'hsl(118, 49%, 90%)',
          950: 'hsl(115, 46%, 95%)',
        }
       },
       
      fontSize: {
        caption: ["0.75rem"], // Small text for captions
        "body-sm": ["0.875rem"], // Smaller body text
        body: ["1rem"], // Default body text size
        "body-lg": ["1.125rem"], // Larger body text for readability
        "heading-sm": ["clamp(1.25rem, 1.5vw + 1rem, 1.5rem)"], // Main headings
        "heading-md": ["clamp(1.5rem, 2vw + 1rem, 2rem)"], // Key section headings
        "heading-lg": ["clamp(1.875rem, 2.5vw + 1rem, 2.5rem)"], // Primary page headings
        "heading-xl": ["clamp(2.25rem, 3vw + 1rem, 3rem)"], // Large hero section headings
        headline: ["clamp(3rem, 4vw + 1rem, 4rem)"], // Biggest headlines for marketing
      },
    },
  },
  plugins: [],
};
