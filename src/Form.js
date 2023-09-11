const Form = ({task,setTask,handleSubmit}) => {
    return (
        <>
        <h1>TODO</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="enter your task here....."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add</button>
        </form>
        </>
    );
}

export default Form;