//! Bài 1( Unfinished ): Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả.


//! Bài 2 ( Complete ): Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
 
//  document.write(titleCase("con mèo béo"));

//! Bài 3 ( Complete ):  Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
// function unique_arr(arr) {
//     let newArr = arr.reduce(function (accumulator, element) {
//         if (accumulator.indexOf(element) === -1) {
//             accumulator.push(element)
//         }
//         return accumulator
//     }, [])
//     return newArr
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 7 , 7, 8];

// console.log(unique_arr(num));

//! Bài 4 ( Complete ): Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần.
//  function compareNumbers(a, b) {
//     return a - b;
//  }

//  let a = [4, 5, 8, 20, 10, 32]
//  console.log(a.sort(compareNumbers));



//! Bài 5 ( Unfinished ): Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).


//! Bài 6 ( Unfinished ): Viết chương trình cho phép người dùng nhập vào ngày tháng năm.

