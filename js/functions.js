// 1. Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

// 2. Функция для проверки палиндрома
function isPalindrome(string) {
  const cleanString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true

// 3. Дополнительное задание: извлечение цифр
function extractDigits(stringOrNumber) {
  const str = String(stringOrNumber);
  const digits = str.match(/\d/g);
  
  if (!digits) {
    return NaN;
  }
  
  return parseInt(digits.join(''), 10);
}

console.log(extractDigits('2023 год'));            // 2023
console.log(extractDigits('ECMAScript 2022'));     // 2022
console.log(extractDigits('1 кефир, 0.5 батона')); // 105
console.log(extractDigits('агент 007'));           // 7
console.log(extractDigits('а я томат'));           // NaN
console.log(extractDigits(2023));                  // 2023
console.log(extractDigits(-1));                    // 1
console.log(extractDigits(1.5));                   // 15