import React from 'react';
import './Tombol.css';

const Tombol = (props) => {
    const { handleChange } = props;

    return (
        <button onClick={() => handleChange(props.children)}>{props.children}</button>
    );
}

export default Tombol;