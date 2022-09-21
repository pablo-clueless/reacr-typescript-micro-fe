/** @types {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx', './dist/*/.html'],
    theme: {
        extend: {
            colors: {
                'primary': '#6C63FF',
              },
              backgroundColor: {
                'primary': '#6C63FF',
              },
              textColor: {
                'primary': '#6C63FF',
              },
              width: {
                100: '100px',
                150: '150px',
                200: '200px',
                250: '250px',
                300: '300px',
                400: '400px',
                500: '500px',
                600: '600px',
              },
              height: {
                100: '100px',
                150: '150px',
                200: '200px',
                300: '300px',
                400: '400px',
                450: '450px',
                500: '500px',
                600: '600px',
              },
              borderColor: {
                'primary': '#6C63FF',
              },
        }
    },
}