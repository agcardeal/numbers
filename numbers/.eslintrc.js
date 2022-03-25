module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        babelOptions: {
            plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-private-methods'
            ]
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}

/* {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    }
} */
