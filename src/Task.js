import crossIcon from './icons/icon-cross.svg';
const Task = ({ taskArray, deleteTask, taskLength }) => {
    return ( 
        <ul>
            {taskArray.map((task) => {
                return (
                    <li key={task.id}>
                        <span>
                        {task.task}
                        <img src={crossIcon} alt="" onClick={() => deleteTask(task.id)} />
                        </span>
                        <hr />
                    </li>
                )
            })}
            <p>{taskLength} {taskLength === 1 || taskLength === 0 ? "task" : "taskes"}</p>
        </ul>
    );
}

export default Task;