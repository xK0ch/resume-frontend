import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "src/app/app.component.spec.ts",
    "src/app/shared/components/navigation-bar/navigation-bar.component.spec.ts",
    "src/app/pages/timeline/timeline.component.spec.ts",
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!@jsverse/transloco)/",
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
};

export default config;
