module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['json', 'html'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['<rootDir>/dist'],
};
