import { NextRequest, NextResponse } from "next/server";
// 跨域请求头
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
export async function proxy(req: NextRequest) {

    // 直接通过 NextResponse.next() 继续处理请求，并添加 CORS 头
    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([key, value]) => {
        // 设置 响应头的跨域
        response.headers.set(key, value);
    })
    return response;
}

//配置匹配路径
export const config = {
    matcher: '/api/:path*',
    //matcher: ['/api/:path*','/api/user/:path*'], 支持单个以及多个路径匹配
    //matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], 同样支持正则表达式匹配
}