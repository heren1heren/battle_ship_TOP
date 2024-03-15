module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts*', // Include TypeScript files in the src folder
      // Add other non-testing files as needed
    ],
    tests: [
      'test/**/*test.ts*', // Include test files (with actual tests)
      // Add other test files as needed
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony',
      },
    },
    testFramework: 'jest',
    browser: null,
    trace: true, // Change this to your preferred browser
    // Other configuration options...
  };
};
