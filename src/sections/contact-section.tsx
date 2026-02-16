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
                        <Link to="vicente@metalbitsystems.com">
                            <td className="py-2 text-blue-800 dark:text-slate-400">vicente@metalbitsystems.com</td>
                        </Link>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Teléfono:</td>
                        <Link to="tel:+56920915255">
                            <td className="py-2 text-blue-800 dark:text-slate-400">+56 9 2091 5255 (🇨🇱)</td>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="tel:+541132512151">
                            <td className="py-2 text-blue-800 dark:text-slate-400">+54 9 11 3251-2151 (🇦🇷)</td>
                        </Link>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}