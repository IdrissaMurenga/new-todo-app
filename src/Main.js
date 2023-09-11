import Form from "./Form";
import Task from "./Task";
import { useState } from 'react';

const Main = () => {
    const getData = (STORAGE_KEY) => {
        if (localStorage.getItem(STORAGE_KEY) !== null) {
            return JSON.parse(localStorage.getItem(STORAGE_KEY))
        } return null;
    }
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState(() => getData("listes"))

    const saveData = (data) => {
        setTaskArray(data)
        localStorage.setItem('listes',JSON.stringify(data))
    }
    const id = Date.now()
    const addTask = () => {
        const taskes = { id, task }
        const array = [...taskArray, taskes];
        if (!task) {
            return;
        }
        setTaskArray(array);
        saveData(array)
        setTask("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    }
    const deleteTask = (id) => {
        const newTaskList = taskArray.filter(task => task.id !== id)
        setTaskArray(newTaskList)
        saveData(newTaskList)
    } 
    return ( 
        <main>
            <Form
                handleSubmit={handleSubmit}
                task={task}
                setTask={setTask} />
            <Task
                taskArray={taskArray}
                deleteTask={deleteTask}
                taskLength={taskArray.length} />
        </main>
    );
}

export default Main;