console.log("Soal 1")

for (let index = 1; index <= 100; index++) {
    console.log("user ke-" + index);
}




console.log("Soal 2")

nilai_awal = 0;

for (let index = 0; index < 10; index++) {
    nilai_awal = nilai_awal + 2;
    console.log(nilai_awal);
}



console.log("Soal 3")

for (let index = 0; index <= 20; index++) {
    if(index % 2 === 0){
        console.log("genap");
    }else
        console.log("ganjil");
    
}


console.log("Soal 4")

if(r === true){
    console.log();
}

let n = 0;

do {
    var r = confirm("Apakah anda mau mengulang?");
    n++;
} while (r === true);

console.log("Perulangan sudah dilakukan sebanyak " + n);


console.log("SOAL 5");

do {
    var kepanjangan = prompt("Sebutkan kepanjangan dari IB?");
} while (kepanjangan !== "Impact Byte");

alert("Selamat jawaban kamu benar");