import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const { todos, error, limit, loading, page } = useTypedSelector((state) => state.todo);
    const { setTodoPage, fetchTodos } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    } else if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map((todo, i: number) => (
                <div key={todo.id + "_" + i}>
                    {todo.id} - {todo.title}
                </div>
            ))}
            {pages.map((p) => (
                <span
                    key={p}
                    onClick={() => setTodoPage(p)}
                    style={{
                        border: p === page ? "2px solid green" : "1px solid grey",
                        marginTop: "10px",
                        padding: "10px",
                        display: "inline-flex",
                    }}>
                    {p}
                </span>
            ))}
        </div>
    );
};

export default TodoList;
