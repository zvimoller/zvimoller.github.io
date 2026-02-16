import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="BIO">
            <div className="text-sm/6.5">
                <p>
                    Soy ingeniero de software y cofundador de MetalBit Systems. 
                    Construyo plataformas y sistemas donde la gobernanza, la eficiencia y la seguridad se integran en la operación diaria, 
                    con procedimientos claros y resultados medibles. Mi enfoque prioriza deployments reproducibles, 
                    documentación operativa y chequeos de calidad que permiten diagnosticar y corregir problemas rápido. 
                </p>
                <br></br>
                <p>
                    Mi objetivo es reducir deuda operativa y técnica construyendo sistemas trazables y confiables, para que el producto
                    pueda iterar más rápido y escalar con menos riesgo.
                </p>
            </div>
        </Section>
    );
}