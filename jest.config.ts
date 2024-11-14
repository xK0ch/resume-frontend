import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!@jsverse/transloco)/",
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
};

export default config;
