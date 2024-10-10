import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'sofa-down': '0 20px 12px rgba(0, 0, 0, 0.4)', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGrayBlue: '#6C7275', 
        
      },
      
    },
    
  },
  
  plugins: [],
};
export default config;
