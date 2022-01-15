module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react',
    '@typescript-eslint',
    'eslint-plugin-jsx-a11y',
  ],
  rules: {
    'arrow-body-style': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
        depth: 3,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 200,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.ts',
          '**/*.stories.tsx',
          'src/tests/**/*',
        ],
      },
    ],
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: [
        './src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
        './src/stories/*.@(ts|tsx|js|jsx|mjs|cjs)',
      ],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
};
