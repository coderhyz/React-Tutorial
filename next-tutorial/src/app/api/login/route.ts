import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// cookie的使用
/**
    * 
    *cookies 是一个异步函数，
    *允许您在服务器组件中读取 HTTP 传入请求 cookie，
    *并在服务器函数或路由处理程序中读取/写入传出请求 cookie。
 */
export async function POST(request: NextRequest) {
    // 解析请求体
    const body = await request.json();
    if (body.admin == 'admin' && body.password == 'password') {
        // 获取cookie存储对象
        const cookieStore = await cookies();
        //设置cookie
        cookieStore.set('token', '123456789', {
            httpOnly: true, // 仅限HTTP访问，不能通过JavaScript访问
            secure: process.env.NODE_ENV === 'production', // 仅在生产环境中使用安全cookie
            sameSite: 'strict', // 防止CSRF攻击
            maxAge: 60 * 60 * 24, // 1天的过期时间
        });
        // 登录成功，返回一个简单的响应
        return NextResponse.json({ code: 1, message: 'Login successful' }, { status: 200 });
    } else {
        // 登录失败，返回错误响应
        return NextResponse.json({ code: 0, message: 'Invalid credentials' }, { status: 401 });
    }
}

// get请求用于测试cookie是否设置成功
export async function GET() {
    // 获取cookie存储对象
    const cookieStore = await cookies();
    // 获取token cookie的值
    const token = cookieStore.get('token');
    if (token && token.value === '123456789') {
        return NextResponse.json({ code: 1 }, { status: 200 });
    } else {
        return NextResponse.json({ code: 0, message: 'Token is invalid' }, { status: 401 });
    }
}