import React from 'react';
import Tombol from './Tombol';

const Belajar = () => {
    const [judul, setJudul] = React.useState("React");

    const handleChange = (judul) => {
        setJudul(judul);
    }

    return (
        <div>
            <h1>Belajar {judul}</h1>
            <Tombol handleChange={handleChange}>React</Tombol>
            <Tombol handleChange={handleChange}>Javascript</Tombol>
        </div>
    );
}

export default Belajar;