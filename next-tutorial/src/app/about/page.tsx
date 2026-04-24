// 模仿加载
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
async function About() {
    await sleep(5000)
    // throw new Error('About页面出错了')
    return (
        <div className="p-4  bg-gray-200 rounded-lg">
            123
        </div>
    );
}

export default About;
