import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    "node_modules",
    "api",
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
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
