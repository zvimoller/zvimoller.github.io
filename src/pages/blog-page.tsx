import { Link } from "react-router-dom";
import Footer from "../components/footer";
import PageHeader from "../components/page-header";
import { blogPosts } from "../content/blog";

export default function BlogPage() {
    return (
        <main className="max-md:px-4">
            <PageHeader title="Blog" subtitle="" />

            <section className="w-full max-w-4xl mx-auto mt-10">
                <div className="flex flex-col gap-3">
                    {blogPosts.map((post) => (
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
                                <span className="shrink-0 text-xs text-gray-400 dark:text-slate-500">
                                    {post.date}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
