"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
// AI集成
export default function Chat() {
    const [input, setInput] = useState("");
    const chatContainerRef = useRef<HTMLDivElement | null>(null)
    const { messages, sendMessage, status, error } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat",
        }),
    });
    useEffect(() => {
        chatContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages.length])
    const isLoading = status === "submitted" || status === "streaming"
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-8">
            <div className="flex-1 space-y-4 pb-24">
                {messages.map((message) => (
                    <div key={message.id} className="whitespace-pre-wrap rounded-lg border p-3">
                        <div className="mb-1 text-sm font-medium text-muted-foreground">
                            {message.role === "user" ? "User" : "AI"}
                        </div>
                        {message.parts.map((part, i) => {
                            if (part.type === "text") {
                                return <div key={`${message.id}-${i}`}>{part.text}</div>;
                            }

                            return null;
                        })}
                    </div>
                ))}

                {isLoading && (
                    <div className="rounded-lg border p-3 text-sm text-muted-foreground">
                        AI is thinking...
                    </div>
                )}

                {error && (
                    <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                        {error.message}
                    </div>
                )}
            </div>
            <div ref={chatContainerRef}></div>
            <form
                className="fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-2xl gap-2 bg-background p-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const text = input.trim();
                    // 如果没有输入或者正在加载 返回
                    if (!text || isLoading) {
                        return;
                    }
                    sendMessage({ text });
                    setInput("");
                }}
            >
                <input
                    className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-background p-2 shadow-sm dark:border-zinc-800"
                    value={input}
                    placeholder="说些什么吧"
                    disabled={isLoading}
                    onChange={(e) => setInput(e.currentTarget.value)}
                />
                <button
                    className="rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground disabled:opacity-50"
                    type="submit"
                    disabled={isLoading || !input.trim()}
                >
                    发送
                </button>
            </form>
        </main>
    );
}
