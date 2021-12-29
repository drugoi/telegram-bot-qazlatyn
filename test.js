/* eslint-disable quotes */

const test = require('ava');

const transformString = require('./transform-string');

test('string transforming lowercase', t => {
  t.is(
    transformString('қанағаттандырылмағандықтарыңыздан'),
    "qanaǵattandyrylmaǵandyqtaryńyzdan"
  );
});

test('string transforming capitalize', t => {
  t.is(
    transformString('Қанағаттандырылмағандықтарыңыздан'),
    "Qanaǵattandyrylmaǵandyqtaryńyzdan"
  );
});

test('string transforming uppercase', t => {
  t.is(
    transformString('ҚАНАҒАТТАНДЫРЫЛМАҒАНДЫҚТАРЫҢЫЗДАН'),
    "QANAǴATTANDYRYLMAǴANDYQTARYŃYZDAN"
  );
});

test('full alphabet', t => {
  t.is(
    transformString('аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя'),
    "aábvgǵdeıojzııkqlmnńoóprstýuúfhhtschshshyieıýıa"
  );
});

test('full alphabet capitalize', t => {
  t.is(
    transformString('АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ'),
    "AÁBVGǴDEIoJZIIKQLMNŃOÓPRSTÝUÚFHHTsChShShYIEIýIa"
  );
});
