import { convertToModelMessages, streamText, UIMessage } from "ai";

import { createDeepSeek } from "@ai-sdk/deepseek";
const deepSeek = createDeepSeek({
    apiKey: process.env.AI_GATEWAY_API_KEY, //设置API密钥
});
export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();
    const result = streamText({
        model: deepSeek('deepseek-chat'), //使用deepseek-chat模型
        messages: await convertToModelMessages(messages),
        system: '你是一个高级程序员，请根据用户的问题给出回答',
    });

    return result.toUIMessageStreamResponse();
}
