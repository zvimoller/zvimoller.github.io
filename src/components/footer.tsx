export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200 dark:text-slate-400 dark:border-slate-800">
            <p>
                © {new Date().getFullYear()}{" "}
                <a href="https://zvimoller.com" target="_blank">
                    zvimoller.com
                </a>
            </p>
        </footer>
    );
}