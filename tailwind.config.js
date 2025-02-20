/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        container: {
            center: true,
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
    },
    plugins: [],
};
