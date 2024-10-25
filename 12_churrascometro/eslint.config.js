import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    // Configuração para arquivos TypeScript
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: typescriptParser, // Define o parser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...js.configs.recommended.rules, // Inclui regras recomendadas do ESLint
      ...reactHooks.configs.recommended.rules, // Inclui regras recomendadas do plugin de hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn', // Exemplo de regra adicional

      // Regras de formatação
      'indent': ['error', 2], // Indentação de 2 espaços
      'semi': ['error', 'always'], // Sempre usar ponto e vírgula
      'quotes': ['error', 'single'], // Usar aspas simples
    },
  },
];




// Versao do eslint para typescript corrigida !!