import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
