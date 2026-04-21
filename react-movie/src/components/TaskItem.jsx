import { useState } from "react";
function TaskItem({ tasks, onChangeTask, onDeleteTask }) {
    return (<>
        <ul>
            {tasks.map(task => {
                //注意不要漏掉括号
                return <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            })}
        </ul>
    </>);
}
function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent
    // 根据编辑状态切换
    if (isEditing) {
        taskContent = (<>
            <input type="text"
                value={task.text}
                // 改变文本
                onChange={(e) => {
                    onChange({
                        ...task,
                        text: e.target.value
                    })
                }}
            />
            <button onClick={() => setIsEditing(false)}>保存</button>
        </>)
    } else {
        taskContent = (<>
            {task.text}
            <button onClick={() => setIsEditing(true)}>编辑</button></>)
    }
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        // 改变选中状态
                        onChange({
                            ...task,
                            done: e.target.checked
                        })
                    }}
                />
            </label>
            {taskContent}
            <button onClick={() => onDelete(task.id)} >删除</button></>
    )
}

export default TaskItem;