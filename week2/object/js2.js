// Object prop pada JS

let mahasiswa = {
    nama: "Eka",
    umur: 19,
    jurusan : "Teknik Informatika",
}

for (prop in mahasiswa){
    console.log(`nilai ${prop} : ${mahasiswa[prop]}`);
}