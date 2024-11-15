import React, { useState, useEffect } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    const addTask = () => {
        if (inputValue.trim()) {
            const newTask = { id: Date.now(), text: inputValue, checked: false, deleted: false };

            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks, newTask];
                return updatedTasks;
            });

            setInputValue("");

            setTimeout(() => {
                setTasks(prevTasks => {
                    const updatedTasks = [...prevTasks];
                    localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // 로컬 스토리지에 저장
                    return updatedTasks;
                });
            }, 500);
        }
    };

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, checked: !task.checked } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, deleted: true } : task
        );
        setTasks(updatedTasks);

        setTimeout(() => {
            const tasksAfterDelete = tasks.filter(task => task.id !== taskId);
            setTasks(tasksAfterDelete);
            localStorage.setItem('tasks', JSON.stringify(tasksAfterDelete));
        }, 500);
    };

    return (
        <div>
            <h1>Check Your Schedule!</h1>
            <input
                id="ToDo"
                className="input"
                type="text"
                placeholder="Enter a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                id="addButton"
                className="addButton"
                onClick={addTask}>
                Add
            </button>

            <div id="ToDoList">
                {tasks.map(task => (
                    <div className={`taskItem ${task.deleted ? 'deleted' : ''} ${task.checked ? 'checked' : ''}`}
                        key={task.id}>
                        <input
                            type="checkbox"
                            id={`task${task.id}`}
                            checked={task.checked}
                            onChange={() => toggleTask(task.id)}
                            className="checkbox"
                        />
                        <div className="customCheckbox" onClick={() => toggleTask(task.id)}></div>
                        <span className={`List ${task.checked ? 'checked' : ''}`}>{task.text}</span>
                        <button
                            className="deleteButton"
                            onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
