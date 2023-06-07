import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import todos from './data/todo';

const App = () => {
    const [arrayTodo, setArrayTodo] = React.useState(todos);

    // Menghandle saat tugas dihapus
    const handleDeleteClick = (id) => {
        const newTodos = arrayTodo.filter((item) => item.id !== id);
        setArrayTodo(newTodos);
    };

    // Menghandle saat tugas ditambahkan
    const handleAddTodo = (text) => {
        const newTodos = [
            ...arrayTodo,
            {
                id: new Date().getTime().toString(),
                text: text,
            },
        ];
        setArrayTodo(newTodos);
    };

    // Menghandle saat tugas diubah
    const handleEditTodo = (id, newText) => {
        const updatedTodos = arrayTodo.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        );
        setArrayTodo(updatedTodos);
    };

    // Asccending
    const handleSortAscending = () => {
        const sortedTodos = [...arrayTodo].sort((a, b) =>
            a.text.localeCompare(b.text)
        );
        setArrayTodo(sortedTodos);
    };

    // Descending
    const handleSortDescending = () => {
        const sortedTodos = [...arrayTodo].sort((a, b) =>
            b.text.localeCompare(a.text)
        );
        setArrayTodo(sortedTodos);
    };

    // Tampilan
    return (
        <div className="container">
            {arrayTodo.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    onTodoClick={handleDeleteClick}
                    onTodoEdit={handleEditTodo}
                />
            ))}
            <TodoForm onAddTodo={handleAddTodo} />
            <div className="sort-buttons">
                <button className="sort-button" onClick={handleSortAscending}>
                    Sort Ascending
                </button>
                <button className="sort-button" onClick={handleSortDescending}>
                    Sort Descending
                </button>
            </div>
        </div>
    );
};

export default App;