// src/sections/blog-section.tsx
import { Link } from "react-router-dom";
import Section from "../components/section";
import { blogPosts } from "../content/blog";

export default function BlogSection() {
    const featured = blogPosts.slice(0, 3);

    return (
        <Section title="BLOG">
            <div className="w-full">
                {/* Header row */}
                <div className="flex items-center justify-end">
                    <Link
                        to="/blog"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                        Ver todos
                    </Link>
                </div>

                {/* Featured posts */}
                <div className="mt-4 flex flex-col gap-3">
                    {featured.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/30"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-slate-400 mt-1">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Date + icon */}
                                <div className="shrink-0 flex items-center gap-3">
                                    <span className="text-xs text-gray-400 dark:text-slate-500">
                                        {post.date}
                                    </span>
                                    <img
                                        src="/assets/blog-open-icon.png"
                                        alt="Open article"
                                        className="h-6 w-6 opacity-70 transition-opacity group-hover:opacity-100 dark:opacity-80"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
