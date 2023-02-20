const path = require('path');

module.exports = {
  plugins: ["tailwindcss"],
  parser: '@typescript-eslint/parser',
  rules: {
    // If we remove the {} options here, it will work. With it, the
    // default for the rule takes over project setting.
    "tailwindcss/no-custom-classname": ["error", {}]
  },
  settings: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwindcss.custom.js')
    }
  }
};
