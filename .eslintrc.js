module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'plugin:prettier/recommended', // Adiciona o plugin do prettier
    ],
};
