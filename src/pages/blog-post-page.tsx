import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import PageHeader from "../components/page-header";
import { getBlogPostBySlug, Markdown } from "../content/blog";

function stripLeadingH1(markdown: string) {
  // Markdown starts with "# Title". We already show title in PageHeader.
  return markdown.replace(/^#\s+.*\n+/, "");
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="max-md:px-4">
        <PageHeader title="Post not found" subtitle="That URL didn’t match any blog post." />
        <section className="w-full max-w-4xl mx-auto mt-10">
          <Link
            to="/blog"
            className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ← Regresar al blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const markdown = stripLeadingH1(post.markdown);

  return (
    <main className="max-md:px-4">
      <PageHeader title={post.title} subtitle={post.excerpt} />

      <section className="w-full max-w-4xl mx-auto mt-10">
        <Link
          to="/blog"
          className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← Regresar al blog
        </Link>

        <p className="mt-4 text-xs text-gray-400 dark:text-slate-500">{post.date}</p>

        {/* Full markdown rendering (headings, lists, code, tables, etc.) */}
        <Markdown markdown={markdown} className="mt-6" />
      </section>

      <Footer />
    </main>
  );
}
