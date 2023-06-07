import React from "react";

// Komponen Todo untuk menampilkan tugas dan fitur pengeditan
const Todo = (props) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedText, setEditedText] = React.useState(props.text);

    const handleTodoClick = () => {
        props.onTodoClick(props.id);
    };

    // Menghandle saat tombol edit di klik
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Menghandle saat tombol save di klik
    const handleSaveClick = () => {
        props.onTodoEdit(props.id, editedText);
        setIsEditing(false);
    };

    // Menghandle saat tombol cancel di klik
    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedText(props.text);
    };

    // Menghandle perubahan teks pada input pengeditan
    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    // Ttampilan komponen Todo
    return (
        <div className="todo">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleTextChange}
                        style={{ marginRight: "10px" }}
                    />
                    <button className="edit-button" onClick={handleSaveClick}>
                        Save
                    </button>
                    <button className="edit-button" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </>
            ) : (
                // Tampilan saat tidak dalam mode pengeditan
                <>
                    <div className="todo-text">{props.text}</div>
                    <span onClick={handleEditClick}>✎</span>
                    <span onClick={handleTodoClick}>x</span>
                </>
            )}
        </div>
    );
};

export default Todo;
