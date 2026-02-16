import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";

type Props = {
    title: string;
    subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
    return (
        <header className="w-full max-w-4xl mx-auto pt-10 max-md:px-4">
            <div className="flex items-center justify-between gap-4">
                <Link
                    to="/"
                    className="text-sm text-gray-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                    ← Volver al inicio
                </Link>

                <ThemeToggle />
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-semibold">{title}</h1>
            {subtitle && (
                <p className="mt-2 text-gray-500 dark:text-slate-400">{subtitle}</p>
            )}
        </header>
    );
}
