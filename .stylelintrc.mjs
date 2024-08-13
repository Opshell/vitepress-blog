/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss'
    ],
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'order/order': [
            'custom-properties',
            'declarations'
        ],
        'order/properties-order': [
            'content',
            // 定位與形式
            'position',
            'inset',
            'top',
            'right',
            'bottom',
            'left',
            'grid-area',
            'flex-grow',
            'flex-shrink',
            'display',
            'flex',
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'flex-basis',
            'order',
            'grid',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',
            'row-gap',
            'column-gap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'justify-items',
            'justify-self',
            'gap',
            'float',
            'clear',
            // 盒模型
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'background-attachment',
            'background-clip',
            'background-origin',
            'background-blend-mode',
            'backdrop-filter',
            'clip',
            'clip-path',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-left',
            'padding-right',
            'padding-bottom',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'box-sizing',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'margin',
            'margin-top',
            'margin-left',
            'margin-right',
            'margin-bottom',
            'box-shadow',
            'drop-shadow',
            // 文字
            'color',
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'white-space',
            'text-align',
            'text-align-last',
            'text-transform',
            'text-decoration',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-wrap',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-orientation',
            'text-shadow',
            'vertical-align',
            'word-wrap',
            'word-break',
            'overflow-wrap',
            'tab-size',
            'hyphens',
            'vertical-align',
            // 列表
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',
            // 特效相關
            'transform',
            'transform-origin',
            'transform-style',
            'transform-box',
            'transform-origin-x',
            'transform-origin-y',
            'transform-origin-z',
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',
            'visibility',
            'overflow',
            'overflow-x',
            'overflow-y',
            'overflow-scrolling',
            'filter',
            'opacity',
            'z-index'
        ],
        'at-rule-no-unknown': null, // 允許未知的 at 規則。
        'rule-empty-line-before': null, // 規則之前必須始終有一個空行。
        'block-no-empty': true, // 不允許空塊。
        'comment-no-empty': true, // 不允許空註解。
        'length-zero-no-unit': true, // 不允許使用零長度的單位（可自動修復）。
        'declaration-block-single-line-max-declarations': 1, // 單行 CSS block 的最參數數量。
        'at-rule-empty-line-before': 'never', // at(@) 規則之前必須始終有一個空行。
        // 'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // 類選擇器的命名模式。
        'selector-class-pattern': null, // 類選擇器的命名模式。
        'property-no-vendor-prefix': null, // 禁止屬性的供應商前綴。
        'value-no-vendor-prefix': null, // 禁止值的供應商前綴。
        'selector-attribute-quotes': 'never', // 不用給屬性選擇器的引號。
        'declaration-empty-line-before': 'never', // 在屬性之前不允許空行。
        'color-function-notation': null, // 不限制色彩函數的表示法。
        'scss/at-mixin-argumentless-call-parentheses': 'always', // 在 mixin 調用時，要求省略空參數的括號。
        'scss/at-mixin-pattern': null, // mixin 的命名模式。
        'scss/dollar-variable-pattern': null, // 變數的命名模式。
        'scss/percent-placeholder-pattern': null, // 繼承型變數的命名模式。
        'value-keyword-case': null // 屬性值的大小寫。
        // 'at-rule-no-unknown': [
        //     true,
        //     {
        //         ignoreAtRules: ['mixin', 'include', 'function', 'return', 'extend', 'at-root', 'if', 'else', 'for', 'each', 'while', 'content', 'import', 'use', 'forward', 'tailwind', 'apply', 'screen', 'layer', 'variants', 'responsive', 'media', 'apply']
        //     }
        // ],
    },
    overrides: [
        {
            files: ['*.vue', '**/*.vue']
        }
    ],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', 'node_modules/', 'docs/.vitrepress/cache/', 'docs/.vitrepress/dist/']
};
