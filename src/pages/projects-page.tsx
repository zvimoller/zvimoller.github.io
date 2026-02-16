import { Link } from "react-router-dom";
import Footer from "../components/footer";
import PageHeader from "../components/page-header";
import { projects } from "../content/projects";

export default function ProjectsPage() {
    return (
        <main className="max-md:px-4">
            <PageHeader
                title="Proyectos"
                subtitle=""
            />

            <section className="w-full max-w-4xl mx-auto mt-10">
                <div className="flex flex-wrap gap-4">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/projects/${project.slug}`}
                            className="group hover:-translate-y-0.5 transition duration-300 w-full sm:w-[calc(50%-0.5rem)] border border-gray-200 bg-white rounded-xl dark:border-slate-800 dark:bg-slate-900/30"
                        >
                            {project.image && (
                                <img
                                    className="rounded-t-xl h-42 object-fit w-full"
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={220}
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 dark:text-slate-400 mt-1">
                                    {project.description}
                                </p>
                                {project.tags?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
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
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
