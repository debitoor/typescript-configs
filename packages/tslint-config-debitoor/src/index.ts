export const rules = {
	'curly': true,
	'indent': [true, 'tabs', 2],
	'no-empty-interface': true,
	'only-arrow-functions': true,
	'prefer-for-of': true,
	'semicolon': [
		true,
		'always'
	],
	'await-promise': true,
	'triple-equals': true,
	'ban': [
		true,
		{ 'name': ['*', 'forEach'], 'message': 'Use a regular for loop instead' }
	],
	'no-conditional-assignment': true,
	'no-debugger': true,
	'no-duplicate-switch-case': true,
	'no-duplicate-variable': true,
	'no-invalid-template-strings': true,
	"no-object-literal-type-assertion": true,
	"no-return-await": true,
	"no-shadowed-variable": true,
	"no-string-literal": true,
	'no-string-throw': true,
	"no-unused-expression": [true, "allow-fast-null-checks"],
	"no-unused-variable": true,
	"no-use-before-declare": true,
	"no-var-keyword": true,
	"restrict-plus-operands": true
};