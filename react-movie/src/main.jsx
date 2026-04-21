import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./css/index.css";
const root = createRoot(document.getElementById("root"));
root.render(
    // 添加路由组件
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
