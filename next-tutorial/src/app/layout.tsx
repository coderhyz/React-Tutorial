import { Metadata } from 'next'
// 导入tailwind全局样式
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'My App',
    description: 'A simple Next.js app with a header and footer.',
}
// 根布局
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body>
                {children}
            </body>
        </html>
    )
}