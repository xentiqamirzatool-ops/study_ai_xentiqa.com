export default function CodeBlock({ code, language='text' }: { code: string; language?: string }) {
  return (
    <div className="relative">
      <div className="absolute top-2 right-3 text-[10px] uppercase tracking-widest text-ink-400 z-10">{language}</div>
      <pre className="code-block"><code>{code}</code></pre>
    </div>
  );
}
