module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"     
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "semi": [2, "always"]
    }
};
