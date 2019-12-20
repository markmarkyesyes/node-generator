module.exports = {
    "preset": "jest-puppeteer",
    "setupFiles": [
        "<rootDir>/__tests__/helpers/init.js"
    ],
    "testMatch": [
        "**/__tests__\/integration\/**/*.js"
    ]
}