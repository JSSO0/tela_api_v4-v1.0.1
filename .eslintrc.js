export const parser = '@babel/eslint-parser'

export default {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Usa as regras do Prettier como regras ESLint
  ],
  plugins: ['react', 'prettier'],
  rules: {
    // Suas regras específicas do projeto podem ser adicionadas aqui
  },
  settings: {
    react: {
      version: 'detect', // Detecta a versão do React automaticamente
    },
  },
}
