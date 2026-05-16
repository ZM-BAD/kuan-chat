import userscripts from 'eslint-plugin-userscripts';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['scripts/**', 'node_modules/**'],
  },
  {
    files: ['*.user.js'],
    plugins: { userscripts },
    rules: {
      ...userscripts.configs.recommended.rules,
    },
  },
  prettier,
];
