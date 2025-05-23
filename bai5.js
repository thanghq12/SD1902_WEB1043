//mảng trong js 
// khai báo mảng trong js 
let mang = [6,7,9,12,13,8,10,14];
console.log(mang[4]);
console.log(mang[5]);
// các hàm hỗ trợ mảng 
// chiều dài mảng 
console.log("do dai cua mang la "+ mang.length);
// lấy ra phần tử cuối cùng của mảng 
console.log(mang[mang.length-1]);
//thêm 1 phần tử vào cuối mảng 
mang.push(15);
console.log("mảng được thêm mới là " + mang);
//hàm splice(x,y,e1,e2,e3,...);
// xóa y phần tử sau vị trí x và thêm các phần tử khác vào mảng 
//xóa 3 phần tử sau vị trí số 2 
mang.splice(2,3,4,5,6);
console.log("Mảng sau khi xóa là " + mang);
// xóa 2 phần tử sau vị trí thứ 4 và thêm 3 phần tử bất kỳ vào mảng 
mang.splice(4,2,55,66,77);
console.log("Mảng sau khi xóa là " + mang);
//xóa phần tử cuối cùng của mảng 
mang.pop();
console.log("Mảng sau khi xóa phần tử cuối cùng là " + mang);
// chuyển chuỗi thành mảng 
let str = "hom,nay,la,thu,7";
let arr_str = str.split(","); // là 1 mảng (Phải có phân cách bằng 1 ký tự gì đó)
console.log(arr_str);
// chuyển mảng thành chuỗi 
let arr = ["a","b","c"];
let str_arr = arr.join();
console.log(str_arr);

