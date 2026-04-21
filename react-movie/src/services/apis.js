const API_KEY = "a5a5776aae52172b4b92d668b9afabec";
const BASE_URL = "https://api.themoviedb.org/3";
// 获取movie
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
// 搜索电影
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results;
};