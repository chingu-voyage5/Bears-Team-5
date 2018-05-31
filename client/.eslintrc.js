module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "env": {
    "browser": true
  },
  plugins: ["react", "jsx-a11y"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "no-console": "off",
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
