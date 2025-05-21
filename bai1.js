// var a = 5;
// var b = 6;
// var c = a+b;
// alert("Tong la " + c);
// 
// var d = parseInt(prompt("Moi nhap vao d"));
// var e = parseInt(prompt("Moi nhap vao e"));
// var f = d+e;
// alert("Tong la" + f);
//nhập 1 số n kiểm tra nếu 
// n là chẵn => hiển thị đây là số chẵn
//n là lẻ => hiển thị đây là số lẻ
// nhập vào diemtoan,diemly,diemhoa 
// tính điểm trung bình  = (diemtoan + diemly + diemhoa)/3
// kiểm tra nếu diemtb>=5 => đạt 
// diemtb < 5 => không đạt  
// tạo 1 promt nhập vào tên 
// tạp 1 prompt nhập vào năm sinh 
// hiển thị ra xin chào + tên + tuổi 
// biết tuổi = 2025 - năm sinh
var ten = prompt("Nhap vao ten");
var namSinh = parseInt(prompt("Nhap vao nam sinh"));
var tuoi = new Date().getFullYear() - namSinh;
alert("Xin chao " + ten + " "+ tuoi)