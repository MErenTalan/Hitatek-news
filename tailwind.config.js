import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    ...defaultTheme.screens,
    'maxLaptop': {'max': '1023px'},
  },
  extend: {
    colors: {
      white: "#fff",
      gray: "#fdfdfd",
      "solid-blue-70": "#005d99",
      "solid-blue-80": "#001733",
      black: "#000",
      "ink-50": "#22262a",
      "sky-40": "#e1e6eb",
      "ink-10": "#a0a5aa",
      "solid-blue-60": "#0089cc",
      "sky-50": "#bfc3c9",
      "solid-blue-50": "#00baff",
    },
    fontFamily: {
      "sf-pro-display": "'SF Pro Display'",
      trt: "TRT",
      font: "'Noto Serif'",
    },
  },
  fontSize: {
    xs: "12px",
    xl: "20px",
    sm: "14px",
    base: "16px",
    "5xl": "24px",
    "29xl": "48px",
    lg: "18px",
  },
};
export const corePlugins = {
  preflight: false,
};
