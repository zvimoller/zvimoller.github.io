import { Link } from "react-router-dom";
import Section from "../components/section";
import { projects } from "../content/projects";

export default function ProjectsSection() {
    const featured = projects.slice(0, 4);

    return (
        <Section title="PROYECTOS">
            <div className="w-full">
                <div className="flex items-center justify-end">
                    <Link
                        to="/projects"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                        Ver todos
                    </Link>
                </div>

                <div className="mt-4 flex flex-wrap justify-center items-center gap-4 mr-auto">
                    {featured.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/projects/${project.slug}`}
                            className="group hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 bg-white rounded-xl dark:border-slate-800 dark:bg-slate-900/30"
                        >
                            {project.image && (
                                <img
                                    className="rounded-t-xl h-42 object-fit"
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={170}
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 dark:text-slate-400 mt-1">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
