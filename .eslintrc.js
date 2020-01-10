module.exports = {
    //system globals
    "env": {
        "node": true,
        "browser": true,
        "amd": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "mocha": true,
        "jasmine": true
    },
    //other globals
    "globals": {
        "register": true,
        "assert": true,
        "delay": true,
        "ready": true,
        "config": true,
        "page": true,
        "Util": true,
        "UI": true,
        "API": true,
        "hsa": true,
        "testrail": true
    },

    "extends": [
        "eslint:recommended"
    ],

    "plugins": [

    ],

    "root": true,

    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },


    //https://eslint.org/docs/4.0.0/rules/

    "rules": {

        "no-console": "off",

        "no-empty": "off",

        "no-unused-vars": ["error", {
            "vars": "local",
            "args": "none"
        }],

        "no-constant-condition": ["error", {
            "checkLoops": false
        }],

        //"no-bitwise": "error",
        "no-eq-null": "error",
        "no-eval": "error",

        //"strict": ["warn", "global"],

        //https://eslint.org/docs/4.0.0/rules/new-cap
        //"new-cap":[],

        "curly": "error",
        "eqeqeq": ["error", "always"],

        "max-params": ["error", 8],
        "max-depth": ["error", 8],
        "max-statements": ["error", 80],
        "complexity": ["error", 8],
        "max-len": ["error", 500],
        "max-nested-callbacks": ["error", 5],

        "no-prototype-builtins": "off",
        "require-atomic-updates": "off",

        "indent": ["error", 4, {
            "SwitchCase": 1,
            "ArrayExpression": "first",
            "ObjectExpression": 1
        }],

        "semi": [
            "error",
            "always"
        ]
    }
};