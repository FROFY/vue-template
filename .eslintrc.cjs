/* global module */
module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended"
        // "plugin:vue/base"
        // "plugin:vue/vue3-strongly-recommended"
        // "plugin:vue/vue3-essential"
        // "plugin:vue/recommended"
    ],
    rules: {
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 3
            },
            "multiline": {
                "max": 1
            }
        }]
    },
}