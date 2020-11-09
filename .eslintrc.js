module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['warn', 'always'],
    'vue/name-property-casing': ['warn', 'kebab-case'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/require-default-prop': 'off',
    'arrow-parens': ['warn', 'as-needed']
  }
}
