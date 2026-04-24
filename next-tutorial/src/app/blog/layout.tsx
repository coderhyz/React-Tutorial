'use client' //需要交互的地方要改为客户端组件 默认是服务端组件
import { useState } from "react";
import Link from "next/link"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    return (
        <html lang="en">
            <body>
                <header className='bg-pink-500 text-white p-4'>
                    <h1 className='text-2xl font-bold'>My App</h1>
                </header>
                {children}
                <footer className='bg-gray-800 text-white p-4'>
                    <p>&copy; 2023 My App. All rights reserved.</p>
                </footer>
            </body>
        </html>
    )
}