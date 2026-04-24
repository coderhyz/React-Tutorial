'use client' //需要交互的地方要改为客户端组件 默认是服务端组件
import { useState, useEffect } from "react"
import Link from "next/link"
export default function AboutLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('AboutLayout 挂载')
        return () => {
            console.log('AboutLayout 卸载')
        }
    }, [])

    return (
        <div>
            {/* <header className="h-16 bg-gray-200 flex items-center justify-between p-4">
                <h1>About Layout Header</h1>
            </header>
            <button onClick={() => setCount(count + 1)}>
                AboutLayout Count: {count}
            </button> */}
            {children}
            <Link className="p-2 text-cyan-500" href="/about/me">Me</Link>
            <Link className="p-2 text-cyan-500" href="/about/me2">Me2</Link>
            <Link className="p-2 text-cyan-500" href="/about">About</Link>

            {/* <footer className="h-16 bg-gray-200  p-4">
                About Layout Footer
            </footer> */}
        </div>


    )
}