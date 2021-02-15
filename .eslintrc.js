module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": ['airbnb'],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
    "rules": {
    "max-length": 0 // 0으로 설정하면 에러 검출 X
  },
  "plugins": ['import'],
  "globals": {
    "$": true
  }
}