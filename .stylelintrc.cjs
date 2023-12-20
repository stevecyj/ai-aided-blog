// .stylelintrc.js
module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ["stylelint-prettier","stylelint-order"],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    "stylelint-config-standard",
    // standard 规则集合的 scss 版本
    "stylelint-config-standard-scss",
    // 样式属性顺序规则
    "stylelint-config-recess-order",
    // 接入 Prettier 规则
    "stylelint-config-prettier",
    "stylelint-prettier/recommended"
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    "prettier/prettier": true,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["unocss"]
      }
    ],
    "no-empty-source": null,
    "declaration-empty-line-before": null,
  },
  overrides: [
    {
         // Ensure Vue files aren't treated solely as html or scss
        files: ["*.vue","**/*.vue"],
        customSyntax: "postcss-html"
    },
],
};
