import "./css/App.css"
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import According from "./pages/According";
import TodoList from "./pages/TodoList";
import Form from "./pages/Form";
import TaskList from "./pages/TaskList";
import Quiz from "./pages/Quiz";
import { Route, Routes } from "react-router";
import { MovieProvider } from "./contexts/MoviesContext";
function App() {
  return (
    // 喜欢电影的上下文提供者
    <MovieProvider>
      {/* 导航栏 */}
      <NavBar />
      <main className="main-content">
        {/* 路由组件 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/according" element={<According />} />
          <Route path="/task" element={<TaskList />} />
          <Route path="/quiz" element={<Quiz />} />

        </Routes>
      </main>
    </MovieProvider>

  );
}

export default App;
