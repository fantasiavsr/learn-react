// Object pada JS

let mahasiswa = {
    nama: "Eka",
    umur: 19,
    jurusan : "Teknik Informatika",
    getinfo(){
        return `Nama : ${this.nama}, Umur : ${this.umur}, Jurusan : ${this.jurusan}`;
    }
}

console.log(mahasiswa.getinfo());

mahasiswa.umur = 20;
mahasiswa.tempatLahir = "Jakarta";

console.log(mahasiswa);