const test = require('ava');

const transformString = require('./transform-string');

test('string transforming lowercase', t => {
  t.is(
    transformString('қанағаттандырылмағандықтарыңыздан'),
    'qanağattandyrylmağandyqtaryñyzdan',
  );
});

test('string transforming capitalize', t => {
  t.is(
    transformString('Қанағаттандырылмағандықтарыңыздан'),
    'Qanağattandyrylmağandyqtaryñyzdan',
  );
});

test('string transforming uppercase', t => {
  t.is(
    transformString('ҚАНАҒАТТАНДЫРЫЛМАҒАНДЫҚТАРЫҢЫЗДАН'),
    'QANAĞATTANDYRYLMAĞANDYQTARYÑYZDAN',
  );
});

test('full alphabet', t => {
  t.is(
    transformString('аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюя'),
    'aäbvgğdeöjziikqlmnñoöprstuūüfhhschşşyıeiuıa',
  );
});

test('full alphabet capitalize', t => {
  t.is(
    transformString('АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ'),
    'AÄBVGĞDEÖJZIIKQLMNÑOÖPRSTUŪÜFHHSChŞŞYIEIuIa',
  );
});
