import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import ProjectsPage from "./pages/projects-page";
import ProjectDetailPage from "./pages/project-detail-page";
import BlogPage from "./pages/blog-page";
import BlogPostPage from "./pages/blog-post-page";
import NotFoundPage from "./pages/not-found-page";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
