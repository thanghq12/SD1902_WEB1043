//thường nếu lấy giá trị từ các ô input nhập liệu vào
// người ta sẽ lấy theo id 
//let so1 = document.getElementById('so1').value; // lấy giá trị từ input nhập vào
//sự kiện 
function anNut() {
    let so1 = parseInt(document.getElementById('so1').value);
    let so2 = parseInt(document.getElementById('so2').value);

    let pheptinh = parseInt(document.getElementById('pheptinh').value); //bắt giá trị selectboxx
    let kq = 0;
    switch(pheptinh) {
        case 1: 
            kq = so1 + so2;
            break;
        case 2: 
            kq = so1 - so2;
            break;
        case 3:
            kq = so1 * so2;
            break;
        case 4:
            kq = so1 / so2;
            break;   
    }
        
    //set giá trị  vào input
    document.getElementById('ketqua').value = kq;
    

    // //

     // alert(an);
} 