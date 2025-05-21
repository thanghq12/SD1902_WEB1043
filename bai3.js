// một số hàm xử lý string 
let str = "toilathang";
//đếm xem trong chuỗi có bao nhiêu ký tự //chiều dài chuỗi 
console.log(str.length);
//cắt chuỗi 
console.log(str.substring(5,10)); // vị tr
//startIndex: chỉ số bắt đầu (tính từ 0, bao gồm ký tự tại vị trí này).

//endIndex: chỉ số kết thúc (không bao gồm ký tự tại vị trí này).
//nối chuỗi 
let str1 = "toi nam nay 29 tuoi";
let srt3 = str.concat(str1); // nối chuỗi
console.log(srt3);
// hàm viết hoa 
let strH = str.toUpperCase();// viết hoa 
console.log(strH);
//chuyeenr từ hoa sang thường
let srtT = strH.toLowerCase();
console.log(srtT);
// hàmd kiểm tra  xem có phải là số hay không 
let  x = "ewqeqw";
let check = isNaN(x); // biến check là false là số 
// biến check là true không phải là số 
// console.log(check);
if (check == false) {
    alert("Là số");
} else {
    alert("Không phải là số");
}