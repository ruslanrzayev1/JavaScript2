// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let a = 1;
// let b = -3;
// let c = 2;

// let D = b ** 2 - 4 * a * c;
// console.log(D);
// if (D > 0) {
//     let x1 = (-b + 1) / (2 * a);
//     let x2 = (-b - 1) / (2 * a); 
//     console.log("Iki həll var");
// } else if (D == 0) {
//     const x1 = -b / (2 * a);
//     console.log("Bir tək həll var");
// } else {
//     console.log("Həll yoxdur, diskriminant mənfi ədəddir.");
// }


// 2. a ədədimiz var. 1-dən 1000-ə qədər a-ya bölünən bütün ədədləri çap edin.

// let a = 2;
// let contex = [];
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 === 0) {
//     contex.push(i);
//   }
// }
// console.log(contex);

// -------------------------------------------

// 3. Bu massivin minimum elementini tapın:

// let arr = [2, 4, 5, 9, 1];
// let min = arr[0];

// for (const element of arr) {
//     if ( min > element) {
//         min = element
//     }
// }
// console.log(min);

// -------------------------------------------

// 4.Bu massivin maksimum elementini tapın.

// let arr = [2, 4, 5, 9, 1];
// let max = arr[0];

// for (const element of arr) {
//     if (element > max) {
//         max = element
//     }
// }
// console.log(max);

// -------------------------------------------

// 5. Bu massivin minimum elementinin indeksini tapın.

// let arr = [2, 4, 5, 9, 1];
// let min = arr[0];

// for (const element of arr) {
//     if ( min > element) {
//         min = element
//     }
// }
// let minIndex = arr.indexOf(arr);
// console.log(minIndex);

// -------------------------------------------

// 6. Bu massivin maksimum elementinin indeksini tapın.

// let arr = [2, 4, 5, 9, 1];
// let max = arr[0];

// for (const element of arr) {
//     if ( element > max) {
//         max = element
//     }
// }
// let maxIndex = arr.indexOf(max);
// console.log(maxIndex);

// -------------------------------------------

// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// let arr = [2, 4, 5, 9, 1];
// let tekİndex = 0;

// for (const element of arr) {
//     if (element % 2 == 1) {
//         tekİndex+=element
//     }
// }
// console.log(tekİndex);

// -------------------------------------------

// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let contex = "Mən Code Academy Tələbəsiyəm"
// console.log(contex.toLowerCase());

// -------------------------------------------

// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// let contex = "            Mən Code Academydə Programing tədrisi alıram            "
// console.log(contex.trim());

// -------------------------------------------

// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// let contex = "Mən Code Academy Tələbəsiyəm.";
// let b = contex.split(" ");

// for (const element of b) {
// }
// console.log(b);

// -------------------------------------------

// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// var contex = "            Mən Code Academydə Programing tədrisi alıram            ";
// console.log(contex.replace(/ /g, '').length);
