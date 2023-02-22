let laptoprudi = {
    merk: 'Asus',
    milik: 'Rudi',
    hidupkanLaptop: function () {
        return 'Hidupkan laptop ' + this.merk + ' milik ' + this.milik;
    }
    // hidupkanLaptop : () => `Hidupkan laptop ${this.merk} milik ${this.milik}`

}

console.log(laptoprudi.merk);
console.log(laptoprudi.milik);
console.log(laptoprudi.hidupkanLaptop());

// Output:
// alert(laptoprudi.hidupkanLaptop());
