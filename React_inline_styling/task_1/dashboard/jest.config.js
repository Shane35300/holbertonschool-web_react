module.exports = {
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	transform: {
	  "^.+\\.jsx?$": "babel-jest"
	},
	moduleNameMapper: {
	  "\\.(css|less)$": "identity-obj-proxy",
	  "\\.(jpg|jpeg|png|gif|webp|svg|ico)$": "<rootDir>/__mocks__/fileMock.js"
	},
	testEnvironment: 'jsdom',
};
