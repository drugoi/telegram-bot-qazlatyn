import test from 'ava';

const transformString = require('./transform-string.js');

test('string transforming lowercase', t => {
  t.is(
    transformString('қанағаттандырылмағандықтарыңыздан'),
    "qanag'attandyrylmag'andyqtaryn'yzdan"
  );
});

test('string transforming capitalize', t => {
  t.is(
    transformString('Қанағаттандырылмағандықтарыңыздан'),
    "Qanag'attandyrylmag'andyqtaryn'yzdan"
  );
});

test('string transforming uppercase', t => {
  t.is(
    transformString('ҚАНАҒАТТАНДЫРЫЛМАҒАНДЫҚТАРЫҢЫЗДАН'),
    "QANAG'ATTANDYRYLMAG'ANDYQTARYN'YZDAN"
  );
});

test('full alphabet', t => {
  t.is(
    transformString('аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя'),
    "aa'bvgg'dejojzi'i'kqlmnn'oo'prsty'uu'fhhtsc's's'yiei'y'i'a"
  );
});

test('full alphabet capitalize', t => {
  t.is(
    transformString('АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ'),
    "AA'BVGG'DEJoJZI'I'KQLMNN'OO'PRSTY'UU'FHHTsC'S'S'YIEI'y'I'a"
  );
});
