import { ThreadList } from "./ThreadList";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { New } from "./thread/New";
import { ThreadPosts } from "./ThreadPosts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread/:thread_id" element={<ThreadPosts />} />
        <Route path="/thread/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
