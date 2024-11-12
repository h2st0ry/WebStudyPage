import React, { useState, useEffect } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");  // 텍스트 입력을 위한 상태 추가

    // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 데이터를 불러옴
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // 할 일 추가
    const addTask = () => {
        if (inputValue.trim()) {
            const newTask = { id: Date.now(), text: inputValue, checked: false };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // 로컬 스토리지에 저장
            setInputValue("");  // 입력 필드 초기화
        }
    };

    // 체크 상태 토글
    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, checked: !task.checked } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // 변경된 상태 로컬 스토리지에 저장
    };

    // 할 일 삭제
    const deleteTask = (taskId) => {
        // 삭제될 항목에 `deleted` 클래스를 추가하여 애니메이션을 적용합니다.
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, deleted: true } : task
        );
        setTasks(updatedTasks); // 상태를 즉시 업데이트

        // 애니메이션 후 실제로 항목을 삭제합니다.
        setTimeout(() => {
            // 삭제된 항목은 필터링하여 최종적으로 삭제
            const tasksAfterDelete = tasks.filter(task => task.id !== taskId);
            setTasks(tasksAfterDelete);
            localStorage.setItem('tasks', JSON.stringify(tasksAfterDelete));  // 변경된 상태 로컬 스토리지에 저장
        }, 500);  // 애니메이션 시간 후 삭제
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
                onChange={(e) => setInputValue(e.target.value)}  // 입력값 상태 관리
            />
            <button 
                id="addButton" 
                className="addButton" 
                onClick={addTask}>
                Add
            </button>

            <div id="ToDoList">
                {tasks.map(task => (
                    <div 
                        className={`taskItem ${task.deleted ? 'deleted' : ''}`} 
                        key={task.id}>
                        {/* 기본 체크박스 (숨기기) */}
                        <input 
                            type="checkbox" 
                            id={`task${task.id}`} 
                            checked={task.checked} 
                            onChange={() => toggleTask(task.id)} 
                            className="checkbox"
                        />
                        {/* 커스터마이즈된 체크박스를 대신할 div */}
                        <div className="customCheckbox" onClick={() => toggleTask(task.id)}></div>
                        <span className={`List ${task.checked ? 'checked' : ''}`}>{task.text}</span> {/* 체크 상태 반영 */}
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
