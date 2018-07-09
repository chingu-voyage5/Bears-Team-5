module.exports = {
  "extends": ["airbnb-base"],
  "env": {
    "browser": true
  },
  "rules": {
    "no-console": "off",
    "consistent-return": 1,
    "no-unused-vars": 1,
    "no-unused-expressions": [1, { "allowTernary": true }],
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": ["warn", {
      "exceptMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
      ],
    }],
  },
};