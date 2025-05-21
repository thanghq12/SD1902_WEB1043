// Hàm  
// hàm được dùng để đóng gói chương trình 
// hàm mang tính tái sư dụng cao làm gọn chương trình 
// hàm 2 loại 
// hàm có trả về -> có return
// hàm không trả về -> ko có return

let n = 5;
// let a = 6;
function ktraChanLe(n) { // n là tham số của hàm 
    if(n%2 == 0) {
        alert("day la so chan");
    } else {
        alert("day la so le ");
    }
}
ktraChanLe(n);
function tinhTong2so(a,b) {// không trả về tất cả mọi xử lý được đóng gói hết trong hàm 
    alert(a+b);
}
function tinhTong2soReturn(a,b) { // có trả về
    return a+b;
}
// có trả về sẽ trả về cho chúng ta giá trị và chúng ta 
// có thể đem các giá trị đó đi cộng trừ nhân chia so sánh v.v.v
let tong = tinhTong2soReturn(6,8);
alert( tong/10);
tinhTong2so(5,7);
// if(a%2 == 0) {
//     alert("day la so chan");
// } else {
//     alert("day la so le ");
// }
// xây dựng các hàm sau :
// hàm tính chu vi và hàm tính diện tích của hình chữ nhật viết bằng
//  (hàm có trả về và không trả về)
// viết hàm tính lũy thừa truyền vào tham số a,n output là a^n 
// ví dụ 
// a =2 b = 3 
// output 2^3 =8 (Viết bằng hàm có trả về và hàm không trả về )
//viết hàm giải phương trình bậc 2 ax^2 + bx + c = 0 bằng hàm (có trả về,không trả về)
//csdfdsfd