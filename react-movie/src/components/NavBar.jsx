import { Link } from "react-router"
import "../css/Navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            {/* 导航头 */}
            <div className="navbar-brand">
                <Link to="/"> Movie App</Link>
            </div>
            {/* 导航链接 */}
            <div className="navbar-links">
                <Link to="/" className="nva-link">Home</Link>
                <Link to="/favorite" className="nva-link">Favorite</Link>
                <Link to="/todoList" className="nva-link">TodoList</Link>
                <Link to="/form" className="nva-link">Form</Link>
                <Link to="/according" className="nva-link">According</Link>
                <Link to="/task" className="nva-link">Task</Link>
                <Link to="/quiz" className="nva-link">Quiz</Link>

            </div>
        </nav>
    )
}
export default NavBar