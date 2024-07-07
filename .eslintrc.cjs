/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 你可以在這裡添加或覆蓋規則
    'no-console': 'off' // 例如，允許使用 console
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: ['**/*.test.js', '**/*.spec.js', '**/vite.config.js']
    //   }
    // ]
  }
}
