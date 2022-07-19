

function kiemtra(num) {
    var giaTri = true;
    
    if (num < 2) {
        giaTri = false;
    } else if (num == 2) {
        giaTri = true;
    }else if (num % 2 == 0) {
        giaTri = false;
    }else {
        for (var i = 3; i <=  Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return  false;
                
            }
        }
    }
    return giaTri;
}

function soNguyenTo(){
    var nhapSo =document.getElementById("soN").value;
    var ketqua = "";

    for(var i = 1 ; i <= nhapSo; i++){
        if(kiemtra(i)){
            ketqua += " " + i
        
        }
    }
document.getElementById("txt").innerHTML = ketqua;
}
document.getElementById("btnT").onclick = soNguyenTo;

// function kiemtra(){
//     var num = "";
//     var s = Math.sqrt(num);
//     for(var i =0 ; i<= s ;i++){
//         if(num % i == 0){
//             alert("ko phải số nguyên")

//         }else{
//             alert("num >1")
//         }
    
// }
// }