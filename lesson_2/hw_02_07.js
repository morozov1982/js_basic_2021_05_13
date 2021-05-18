'use strict';

/*
7. * Сравнить null и 0. Объяснить результат.
*/

console.log(null > 0);    // false    - null не приводится к числовому типу
console.log(null == 0);   // false    - null не приводится к числовому типу
console.log(null >= 0);   // true     - null приводится к числовому типу
console.log(null === 0);  // false    - здесь всё просто, типы разные, значит не равны

// Вычитал здесь: https://learn.javascript.ru/comparison
