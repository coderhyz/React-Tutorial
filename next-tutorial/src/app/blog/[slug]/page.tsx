export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params


    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
        </div>
    )
}