import React from 'react';
import Tombol from './Tombol';
import './Belajar.css';

class Belajar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            judul: "React"
        }
    }

    componentDidMount = () => {
        console.log("Judul awal: " + this.state.judul);
    }

    componentDidUpdate = () => {
        console.log("Judul akhir: " + this.state.judul);
    }

    handleChange = (judul) => {
        this.setState({
            judul: judul
        });
    }

    render() {
        return (
            <>
                <div>
                    <h1>Belajar {this.state.judul}</h1>
                    <Tombol handleChange={this.handleChange}>React</Tombol>
                    <Tombol handleChange={this.handleChange}>Javascrtipt</Tombol>
                </div>
            </>
        );
    }
}

export default Belajar;