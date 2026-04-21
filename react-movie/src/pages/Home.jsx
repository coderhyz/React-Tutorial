import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/apis";
function Home() {
    // 搜索参数
    const [searchQuery, setSearchQuery] = useState("")
    // 电影列表
    const [movies, setMovies] = useState([])
    // 加载状态
    const [loading, setLoading] = useState(true)
    // 错误信息
    const [error, setError] = useState("")
    // 搜索电影
    async function handleSearch(e) {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            // 发起请求
            const data = await searchMovies(searchQuery)
            setMovies(data)
            setError(null)
        } catch (error) {
            console.log(error)
            setError("搜索电影数据失败...")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        // 获取movie
        async function getMovies() {
            try {
                const data = await getPopularMovies()
                setMovies(data)
            } catch (error) {
                console.log(error)
                setError("加载电影数据失败...")
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, [])
    return (

        <div className="home">
            {/* 提交表单 */}
            <form onSubmit={handleSearch} className="search-form">
                {/* 设置搜索参数 */}
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="搜索电影" className="search-input" />
                <button type="submit" className="search-btn">搜索</button>
            </form>
            {/* 错误提示 */}
            {error && <p>{error}</p>}
            {/* 加载效果 */}
            {loading ? (<p>正在加载数据...</p>) : <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </div>}
        </div>
    );
}

export default Home;
