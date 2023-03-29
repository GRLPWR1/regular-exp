// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    let regexp = /(\d{3}-){2}\d{3}\s\d{2}\b/g;
    return regexp.test(string);
};

console.log(hasSNILS('234-600-142 22'));

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    let regexp = /(\d{3}-){2}\d{3}\s\d{2}\b/;
    let result = string.match(regexp);
    return result[0];
}
console.log(grabSNILS("The number is 234-600-142 22"));

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
    let regexp = /(\d{3}-){2}\d{3}\s\d{2}\b/g;
    return string.match(regexp);
}
console.log(grabAllSNILS("The numbers are 350-802-07 94, 234-600-142 w2, and 013-605-876 944"));

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
    let regexp = /(\d{3}-){2}\d{3}\s(\d{2}\b)/g;
    return string.replace(regexp, 'XXX-XXX-XXX $2');
}
console.log(hideAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"));


// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {

}

module.exports = {
hasSNILS,
grabSNILS,
grabAllSNILS,
hideAllSNILS,
formatSNILS
};
