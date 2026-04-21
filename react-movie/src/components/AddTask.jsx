import { useState } from "react";

function AddTask({ onAdd }) {
    const [text, setText] = useState("")
    function handleSubmit(e) {
        // 1. 阻止表单默认的刷新行为
        e.preventDefault();
        // 2. 只有当输入框不为空时才添加
        if (text.trim()) {
            onAdd(text);
            setText(''); // 3. 添加完后清空输入框
        }
    }
    return (<>
        <div style={{ display: 'flex', marginBottom: 20 }}>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text}
                    placeholder="添加任务"
                    onChange={(e) => setText(e.target.value)} />
                <button>添加</button>
            </form>
        </div>

    </>);
}

export default AddTask;