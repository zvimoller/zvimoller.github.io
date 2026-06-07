import Section from "../components/section";
import { Link } from 'react-router-dom';

export default function ContactSection() {
    return (
        <Section title="CONTACTO">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <Link to="mailto:zvimoller@gmail.com">
                            <td className="py-2 text-blue-800 dark:text-slate-400">zvimoller@gmail.com</td>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="mailto:vmoller@thesingularity.cl">
                            <td className="py-2 text-blue-800 dark:text-slate-400">vmoller@thesingularity.cl</td>
                        </Link>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Teléfono:</td>
                        <Link to="tel:+56962146711">
                            <td className="py-2 text-blue-800 dark:text-slate-400">+56 9 6214 6711 (🇨🇱)</td>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="tel:+541132512151">
                            <td className="py-2 text-blue-800 dark:text-slate-400">+54 9 11 3251-2151 (🇦🇷)</td>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="tel:+59894506348">
                            <td className="py-2 text-blue-800 dark:text-slate-400">+598 94 506 348 (🇺🇾)</td>
                        </Link>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}