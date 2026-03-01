import { tanstackConfig } from '@tanstack/eslint-config';
import pluginRouter from '@tanstack/eslint-plugin-router';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...tanstackConfig,
  ...pluginRouter.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      // Optional: Add any custom rules here
    },
  },
];
