import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import PageHeader from "../components/page-header";
import { getProjectBySlug, Markdown } from "../content/projects";

function stripLeadingH1(markdown: string) {
  return markdown.replace(/^#\s+.*\n+/, "");
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="max-md:px-4">
        <PageHeader title="Project not found" subtitle="That URL didn’t match any project." />
        <section className="w-full max-w-4xl mx-auto mt-10">
          <Link
            to="/projects"
            className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ← Todos los proyectos
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const markdown = stripLeadingH1(project.markdown);

  return (
    <main className="max-md:px-4">
      <PageHeader title={project.title} subtitle={project.description} />

      <section className="w-full max-w-4xl mx-auto mt-10">
        <Link
          to="/projects"
          className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← Todos los proyectos
        </Link>

        {project.image && (
          <img
            src={`/${project.image}`}
            alt={project.title}
            className="mt-6 w-full rounded-2xl border border-gray-200 dark:border-slate-800"
          />
        )}

        {project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-gray-200 px-2 py-1 text-gray-600 dark:border-slate-800 dark:text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Full markdown rendering */}
        <Markdown markdown={markdown} className="mt-8" />

        {project.links?.length ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-gray-50 transition dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:bg-slate-900/60"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </section>

      <Footer />
    </main>
  );
}
