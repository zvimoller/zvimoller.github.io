import mermaid from "mermaid";
import { useEffect, useId, useMemo, useState } from "react";
import { useIsDarkMode } from "./use-is-dark-mode";

type Props = { chart: string };

export default function MermaidDiagram({ chart }: Props) {
  const isDark = useIsDarkMode();
  const reactId = useId();
  const id = useMemo(() => `mmd-${reactId.replace(/[:]/g, "")}`, [reactId]);

  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const src = (chart ?? "").trim();

    async function run() {
      setError(null);
      setSvg("");

      if (!src) return;

      try {
        // El markdown es de tu repo, no input random; queremos que <br/> en labels funcione.
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: isDark ? "dark" : "default",
        });

        const out = await mermaid.render(id, src);
        if (!cancelled) setSvg(out.svg);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (!cancelled) setError(msg);
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, [chart, id, isDark]);

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
        <div className="font-semibold">Mermaid diagram failed to render</div>
        <div className="mt-1 whitespace-pre-wrap font-mono text-xs opacity-90">{error}</div>
      </div>
    );
  }

  return (
    <div
      className="my-6 overflow-x-auto rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-slate-950"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
