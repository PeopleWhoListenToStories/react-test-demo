module.exports = {
  semi: true, // 使用分号结尾 默认为true
  eslintIntegration: true,
  singleQuote: true, // 使用单引号，默认false (在jsx中配置无效，默认都是双引号)
  endOfLine: 'lf',
  tabWidth: 2, // 设置tab宽度为2个空格
  trailingComma: 'none',
  bracketSpacing: true, // 对象，数组括号与文字之间加空格，“{ name: "zs"}” 默认为true
  arrowParens: 'avoid' // (x) => {} 箭头函数参数只有一个时是否要有小括号，avoid：省略括号
};
