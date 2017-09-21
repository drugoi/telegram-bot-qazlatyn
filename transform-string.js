const qqMap = require('./qq-db.js');

const transformString = text => {
  let result = '';
  if (text.length) {
    for (const element of text) {
      if (element && typeof qqMap[element] === 'string') {
        result += qqMap[element];
      } else {
        result += element;
      }
    }
  }
  return result;
};

module.exports = transformString;
