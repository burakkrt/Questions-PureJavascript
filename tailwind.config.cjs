/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ['./**/*.html'],
    content: [
        './**/*.html',
        './**/components/main.js',
        './**/components/questionDOM.js',
        './**/components/questionVisibleAnswer.js',
        './**/components/questionCreateCheck.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
