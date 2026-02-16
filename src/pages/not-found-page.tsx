import { Link } from "react-router-dom";
import Footer from "../components/footer";
import PageHeader from "../components/page-header";

export default function NotFoundPage() {
    return (
        <main className="max-md:px-4">
            <PageHeader title="404" subtitle="This page does not exist. Humans, sadly, are fallible." />
            <section className="w-full max-w-4xl mx-auto mt-10">
                <Link
                    to="/"
                    className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                    ← Volver al inicio
                </Link>
            </section>
            <Footer />
        </main>
    );
}
