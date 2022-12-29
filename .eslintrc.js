module.exports = {
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'testing-library'],
	rules: {},

	settings: {
		react: {
			version: 'detect',
		},
	},
};
