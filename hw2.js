// 1. Создать функцию multiply, которая будет принимать любое количество
// чисел и возвращать их произведение:
// multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() = 0



// var result;
// function multiply() {
//     let r = 1;
//     var n = arguments.length;
//         if(n==0) return (0) // выход !
//     for (var i = 0; i < n; i++) 
//         r *= arguments[i];
//     return r;    
//  }   
// result = multiply(2, 3)
// console.log(` Result is `, result); 

// result = multiply()
// console.log(` Result is `, result); 
//=============================================================================

// 2. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью рекурсии
// вычислить факториал числа 10: factorial(10) = 3628800
// var result;
// function myFactorial(n) {
//    if(n==0) return (1) // выход !
//    return(n * myFactorial(n-1) )
// } 
// result = myFactorial(3);
// console.log(` Result is `, result); 
//==================================================================================

// 3. Создать функцию, которая принимает строку и возвращает строку-
// перевертыш: reverseString(‘test’) = “tset”.
// var result;

// function reverseString(str) {
//     var newStr = "";
//     for (var i = str.length-1; i >= 0; i--) {
//           newStr=newStr+str[i];
//     }
//     return newStr;
// } 
// result = reverseString('tset');
// console.log(` Result is `, result); 
// //==================================================================================

// 4. Создать функцию, которая в качестве аргумента принимает строку из
// букв и возвращает строку, где каждый символ разделен пробелом и
// заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) = “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод

// var result;

// function getCodeStringFromText(str) {
//     var newStr = "";
//     for (var i = 0; i <= str.length-1; i++) {     
//         var n = str.charCodeAt(i);
//         newStr+=n.toString() + " ";
//     }
//     return newStr;
// } 
// result = getCodeStringFromText('hello');
// console.log(` Result is `, result); 


// 6. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк
// - вторая функция (колбэк) обрабатывает каждый элемент массива
// Первая функция возвращает строку “New value: ” и обработанный массив:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], secondFunc) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], secondFunc) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], secondFunc) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], secondFunc) → “New value: cba, 321,” // строки инвертируются
// firstFunc([1,2,3], function(number) { return number + 5 + ‘, ’;}); // 'New value: 6, 7, 8,'
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки




// var result=processWordsArray(['my', 'name', 'is', 'Trinity'], capitalizeWord);

// var result=processWordsArray([10, 20, 30], multBy10);

// var result=processWordsArray(['abc', '123'], reverseWord);







// function processWordsArray (arr, handler) {
//     let newString = "";
//     for (let i = 0; i < arr.length; i++) { 
//         let word = arr[i];
//         newString += handler(word);
//     }         
//     return "New value: " + newString;
// }






// function capitalizeWord(str){
//     return (str[0].toUpperCase()) + str.substring(1);
// };

// function multBy10(num){
//     return (num * 10).toString() + " ";
// };

// function reverseWord(str){
//     for (var i = str.length-1, newStr = " "; i >= 0; i--) {
//           newStr += str[i];
//     }
//     return newStr + ", "
// };


