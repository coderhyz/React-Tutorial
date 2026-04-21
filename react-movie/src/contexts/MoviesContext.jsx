import { createContext, useState, useContext, useEffect } from "react";
const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)
export const MovieProvider = ({ children }) => {
    // 喜欢的电影列表
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        // 获取本地存储的喜欢的电影列表
        const storedFavor = localStorage.getItem("favorites")
        if (storedFavor) {
            setFavorites(JSON.parse(storedFavor))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    // 添加到喜欢
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }
    // 移除喜欢
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id != movieId))
    }
    // 是否喜欢
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}