import { useEffect, useMemo, useState } from "react";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";
let nextId = 3;
const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false }
];
function TaskList() {

    // 任务列表
    const [tasks, setTasks] = useState(initialTasks)
    // 当前显示的任务类型
    const [taskFilter, setTaskFilter] = useState("all")
    // 是否全选任务
    const isCheckedAll = useMemo(() => {
        return tasks.length > 0 && tasks.every(task => task.done)
    }, [tasks])
    // 已经完成的任务
    const completedCount = useMemo(() => tasks.reduce((count, task) => {
        return task.done ? count + 1 : count;
    }, 0), [tasks]);
    // 根据筛选条件显示任务
    const visibleTasks = useMemo(() => {
        if (taskFilter === "active") {
            return tasks.filter(task => !task.done)
        }

        if (taskFilter === "completed") {
            return tasks.filter(task => task.done)
        }

        return tasks
    }, [tasks, taskFilter])
    useEffect(() => {
        console.log(123)
    }, [])
    // 添加任务
    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false,
            },
        ]);
    }
    // 删除任务
    function handleDeleteTask(taskId) {
        setTasks(tasks.filter(task => task.id != taskId))
    }
    // 改变复选框状态或者文本
    function handleChange(task) {
        const nextTask = tasks.map(t => {
            if (task.id === t.id) {
                return task
            } else {
                return t
            }
        })
        setTasks(nextTask)
    }

    // 全选
    function handleCheckAll() {
        const nextTasks = tasks.map(task => {
            return {
                ...task,
                done: !isCheckedAll
            }
        })
        setTasks(nextTasks)
    }
    return (
        <>
            <h2>布拉格的行程安排</h2>
            <AddTask onAdd={handleAddTask} />
            <TaskItem tasks={visibleTasks} onChangeTask={handleChange} onDeleteTask={handleDeleteTask}></TaskItem>
            <label htmlFor="checkAll">
                <input onChange={handleCheckAll} type="checkbox" checked={isCheckedAll} name="checkAll" id="checkAll" />
                全选
            </label>
            <span> total: {tasks.length}</span>
            <span> 已经完成：{completedCount}</span>
            <span> {" "}未完成:{tasks.length - completedCount}</span>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <span style={{ border: '1px solid pink', padding: '5px' }}
                    onClick={() => setTaskFilter("active")}
                > active</span>
                <span style={{ border: '1px solid pink', padding: '5px' }}
                    onClick={() => setTaskFilter("completed")}
                > completed</span>
                <span style={{ border: '1px solid pink', padding: '5px' }}
                    onClick={() => setTaskFilter("all")}
                > all</span>
            </div>

        </>)

}
export default TaskList
