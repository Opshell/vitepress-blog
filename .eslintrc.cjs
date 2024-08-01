module.exports = {
    root: true, // eslint自動生成沒有，需自行加上, 用来告诉eslint找当前配置文件不能往父级查找
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        './.eslintrc-auto-import.json', // `unplugin-auto-import` 生成的規則設定
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        '@vue/prettier'
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
        '@typescript-eslint/ban-types': [
            'error',
            {
                // 關閉錯誤(error)：不要以 {} 當作一個類型
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        // "@typescript-eslint/no-explicit-any": ["off"], // 關閉警告(warning)：不允許使用 any
        // 'vue/multi-word-component-names': 'off',
        'prettier/prettier': ['error']
    },
};
