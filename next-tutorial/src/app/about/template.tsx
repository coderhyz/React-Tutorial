'use client' //需要交互的地方要改为客户端组件 默认是服务端组件
/**
 * 嵌套顺序
 * RootLayout
 *  - AboutLayout
 *     - AboutTemplate
 *       - AboutPage
 */
import { useState, useEffect } from "react"
export default function AboutTemplate({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('AboutTemplate挂载')
        return () => {
            console.log('AboutTemplate 卸载')
        }
    }, [])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                AboutTemplate Count: {count}
            </button>
            {children}
        </div>




    )
}