module.exports = {
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    testMatch: [
        "**/__tests__\/unit\/**/*.js"
    ]
};