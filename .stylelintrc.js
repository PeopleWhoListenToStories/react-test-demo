module.exports = {
  processors: [],
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    // 命名规范 - 设置了类名规范  "selector-class-pattern":"^([a-z][a-z0-9]*)(_[a-z0-9]+)*$"//类名规范 snake_case下划线链接，类名必须是下划线链接
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    // 颜色值小写
    'color-hex-case': 'lower',
    // 注释前无须空行
    'comment-empty-line-before': 'never',
    // 使用数字或命名的 (可能的情况下) font-weight 值
    'font-weight-notation': null,
    // 在函数的逗号之后要求有一个换行符或禁止有空白
    'function-comma-newline-after': null,
    // 在函数的括号内要求有一个换行符或禁止有空白
    'function-parentheses-newline-inside': null,
    // url使用引号
    'function-url-quotes': 'always',
    // 字符串使用单引号
    'string-quotes': 'single',
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    // 指定@规则名的大小写
    'at-rule-name-case': 'lower',
    // 禁止零长度的单位（可自动修复）
    'length-zero-no-unit': true,
    // 简写属性
    'shorthand-property-no-redundant-values': true,
    // 小数不带0
    'number-leading-zero': 'never',
    // 禁止声明快重复属性
    'declaration-block-no-duplicate-properties': true,
    // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'no-descending-specificity': true,
    // 限制一个选择器中 ID 选择器的数量
    'selector-max-id': 0,
    'max-nesting-depth': 3,
    indentation: [
      2,
      {
        severity: 'warning' // 指定缩进  warning 提醒
      }
    ],
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': null,
    // 禁止空源
    'no-empty-source': null,
    // 禁止缺少文件末尾的换行符
    'no-missing-end-of-source-newline': null,
    // 规则顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-color',
      'border',
      'border-radius',
      'content',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'transform'
    ]
  }
};
