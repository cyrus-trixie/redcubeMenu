/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // --- Add this section for the animation ---
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }, // Slightly scales up by 3%
        }
      },
      animation: {
        heartbeat: 'heartbeat 3s ease-in-out infinite', // 3 seconds duration, ease-in-out for smoothness, infinite loop
      }
      // --- End of animation section ---
    },
  },
  plugins: [],
}