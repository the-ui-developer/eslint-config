module.exports = {
    "env": {
      "amd": true,
      "browser": true,
      "es6": true,
      "jest": true,
      "mocha": true,
      "node": true
    },
    "extends": [
      "standard",
      "plugin:jsx-a11y/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "impliedStrict": true,
        "jsx": true
      },
      "ecmaVersion": 7,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "babel",
      "jsx-a11y",
      "sort-destructure-keys",
      "sort-keys-fix"
    ],
    "rules": {
      "arrow-parens": [
        0,
        "as-needed"
      ],
      "comma-dangle": [2, "always-multiline"],
      "generator-star-spacing": [
        "error",
        "after"
      ],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          "aspects": [
            "noHref",
          ]
        }
      ],
      "jsx-a11y/no-onchange": 1,
      "jsx-quotes": [
        2,
        "prefer-double"
      ],
      "no-unused-expressions": 0,
      "babel/no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
      "lines-between-class-members": 2,
      "no-cond-assign": 0,
      "no-console": 1,
      "no-use-before-define": [
        "error",
        {
          "functions": false,
          "variables": false
        }
      ],
      "no-var": "error",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "operator-linebreak": 0,
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": true
        }
      ],
      "quote-props": [
        2,
        "as-needed",
        {
          "unnecessary": false
        }
      ],
      "react/jsx-curly-spacing": [
        2,
        {
          "children": true,
          "spacing": {
            "objectLiterals": "never"
          },
          "when": "always"
        }
      ],
      "react/button-has-type": [2, {
        "button": true,
        "submit": true
      }],
      "react/jsx-indent": [
        2,
        2
      ],
      "react/jsx-indent-props": [
        2,
        2
      ],
      "react/jsx-no-undef": 2,
      "react/jsx-quotes": 0,
      "react/jsx-sort-props": [2, {
        "ignoreCase": true
      }],
      "react/jsx-tag-spacing": 2,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/jsx-wrap-multilines": [2, {
        "arrow": "parens-new-line",
        "assignment": "parens-new-line",
        "declaration": "parens-new-line",
        "logical": "parens-new-line",
        "return": "parens-new-line",
        "condition": "parens-new-line",
        "prop": "parens-new-line"
      }],
      "react/no-unknown-property": 2,
      "react/prop-types": 1,
      "react/sort-comp": [
        2,
        {
          "groups": {
            "lifecycle": [
              "displayName",
              "propTypes",
              "contextTypes",
              "childContextTypes",
              "state",
              "statics",
              "constructor",
              "defaultProps",
              "getDefaultProps",
              "getInitialState",
              "getChildContext",
              "componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "componentDidUpdate",
              "componentWillUnmount",
              "mixins"
            ]
          },
          "order": [
            "static-methods",
            "lifecycle",
            "render",
            "everything-else"
          ],

        }],      
     
      "sort-destructure-keys/sort-destructure-keys": [2, {
        "caseSensitive": false
      }],
      "sort-imports": [2, {
        "ignoreCase": true,
        "ignoreDeclarationSort": true
      }],
      "sort-keys-fix/sort-keys-fix": [2, "asc", {
        "caseSensitive": false
      }],
      "template-curly-spacing": [2, "never"],
      "yield-star-spacing": [
        "error",
        "after"
      ],
    }
  }
 