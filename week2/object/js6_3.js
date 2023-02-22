// forEach() dan map() pada array di JS

const mahasiswas = [
    {
        nama: "Eka",
        umur: 19,
        jurusan: "Teknik Informatika",
    },
    {
        nama: "Lisa",
        umur: 18,
        jurusan: "Sistem Informasi",
    },
    {
        nama: "Rudi",
        umur: 19,
        jurusan: "Teknik Elektro",
    },
];

const prosesMahasiswa = (mahasiswa) =>
    `<p> ${mahasiswa.nama} (${mahasiswa.umur}), ${mahasiswa.jurusan} </p>`;

const formatMahasiswas = mahasiswas.map(prosesMahasiswa);

console.log(formatMahasiswas);

const renderData = (data) => {
    document.getElementById("root").innerHTML = formatMahasiswas.join("");
};