const { defaults } = require('jest-config');

defaults.moduleNameMapper = {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
}

module.exports = defaults;