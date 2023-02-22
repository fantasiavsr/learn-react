// Object destructuring pada JS

const dataMahasiswa = () => {
    return {
        nama: "Eka",
        umur: 19,
        jurusan : "Teknik Informatika",
    }
}

let {nama: namaMahasiswa, umur: umurMahasiswa, jurusan: jurusanMahasiswa} = dataMahasiswa();

console.log(namaMahasiswa);
console.log(umurMahasiswa);