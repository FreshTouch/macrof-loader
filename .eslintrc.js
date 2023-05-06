module.exports = {
  root: true,
  extends: [require.resolve("@macrof/tool-kit/eslint")],
  globals: {
    process: true,
  },
  rules: {
    '@typescript-eslint/no-namespace': 0
  }
};
