module.exports = {
    extends : [
        'react-app'
    ],
    // These rules ensure errors are shown if any of the keys are found
    rules: {
        'no-unused-vars': 'error',
        'no-undef': 'error',
        'no-console': 'warn',
        'no-warning-comments': 'error',
        'eqeqeq': 'error'
    },
}