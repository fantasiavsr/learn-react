import React from "react";

// Komponen TodoForm untuk menambahkan tugas baru
const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = React.useState("");
    const [pesanErrors, setpesanErrors] = React.useState(null);

    // Menghandle perubahan pada input tambahan tugas
    const handleInputChange = (e) => {
        setInputTodo(e.target.value);
    };

    // Validasi
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputTodo.trim() === "") {
            setpesanErrors("Todo tidak boleh kosong");
        } else {
            props.onAddTodo(inputTodo);
            setInputTodo("");
            setpesanErrors(null);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={inputTodo}
                    onChange={handleInputChange}
                />
                {pesanErrors && (
                    <small className="small-error">{pesanErrors}</small>
                )}
            </div>
        </form>
    );
};

export default TodoForm;