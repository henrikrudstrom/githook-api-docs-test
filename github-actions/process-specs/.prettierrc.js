module.exports = {
  /**
   * prettier ^1.9 behaviour
   *
   * @see https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-arrowparens-to-always-7430httpsgithubcomprettierprettierpull7430-by-kachkaevhttpsgithubcomkachkaev
   */
  // 'arrow-body-style': [2, 'as-needed'],
  // First available in v1.9.0, https://prettier.io/docs/en/options.html#arrow-function-parentheses
  // keeping the default "always" for now, not arrowParens: 'avoid',
  /**
   * prettier ^1.9 behaviour
   * 'lf' is default/recommened
   * @see https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-endofline-to-lf-7435httpsgithubcomprettierprettierpull7435-by-kachkaevhttpsgithubcomkachkaev
   */
  endOfLine: 'lf',
  /**
   * @see https://prettier.io/docs/en/options.html#print-width
   */
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
