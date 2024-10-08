module.exports = {
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-prettier/recommended"],
  rules: {
    "max-nesting-depth": [
      1,
      {
        ignore: ["pseudo-classes"],
      },
    ],
  },
};
