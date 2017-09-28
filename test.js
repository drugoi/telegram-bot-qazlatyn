import test from 'ava';

const transformString = require('./transform-string.js');

test('string transforming lowercase', t => {
  t.is(
    transformString('қанағаттандырылмағандықтарыңыздан'),
    'qanaghattandyrylmaghandyqtaryngyzdan'
  );
});

test('string transforming capitalize', t => {
  t.is(
    transformString('Қанағаттандырылмағандықтарыңыздан'),
    'Qanaghattandyrylmaghandyqtaryngyzdan'
  );
});

test('string transforming uppercase', t => {
  t.is(
    transformString('ҚАНАҒАТТАНДЫРЫЛМАҒАНДЫҚТАРЫҢЫЗДАН'),
    'QANAGhATTANDYRYLMAGhANDYQTARYNgYZDAN'
  );
});

test('full alphabet', t => {
  t.is(
    transformString('аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя'),
    'aaebvgghdejozhzijkqlmnngooeprstwuuefhhcchshshyiejwja'
  );
});

test('full alphabet capitalize', t => {
  t.is(
    transformString('АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ'),
    'AAeBVGGhDEJoZhZIJKQLMNNgOOePRSTWUUeFHHCChShShYIEJwJa'
  );
});
