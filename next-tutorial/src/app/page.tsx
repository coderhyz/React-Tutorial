"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    // 登录函数，发送POST请求到/api/login
    const handleLogin = async () => {
        const res = fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ admin: username, password }),
        });
        const data = await res.then(res => res.json());
        if (data.code === 1) {
            router.push("/home");
        } else {
            console.log('登录失败')
        }
    };
    return (
        <main className="flex flex-col gap-1.5 min-h-screen w-full items-center justify-center px-4">
            <div className="flex w-full max-w-sm flex-col gap-4">
                <Input
                    placeholder="admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={handleLogin}>Login</Button>
            </div>
            <div className="w-full max-w-sm">
                <Button onClick={() => router.push('/ai')}>AI</Button>

            </div>
        </main>
    );
}

export default Home;
