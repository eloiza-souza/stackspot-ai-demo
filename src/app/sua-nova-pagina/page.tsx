import Image from "next/image";
// ❌ 1. Má prática: componente sem nome descritivo
export default function Component() {
  // ❌ 2. Má prática: variável não utilizada
  const unused = "isso nunca é usado";

  // ❌ 3. Má prática: lógica inline desnecessária
  const timestamp = new Date().toISOString();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* ❌ 4. Má prática: conteúdo de teste visível em produção */}
      <p>DEBUG: {timestamp}</p>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* ❌ 5. Má prática: uso de string como src, sem otimização ou domínio externo configurado */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          data-testid="next-logo"
        />

        {/* ❌ 6. Má prática: uso de `ol` para itens que não são realmente ordenados */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          {/* ❌ 7. Má prática: conteúdo duplicado/redundante */}
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* ❌ 8. Má prática: target="_blank" sem rel="noopener" em links externos (segurança) */}
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://example.com"
            target="_blank"
            // rel="noopener noreferrer" // intencionalmente removido
            data-testid="deploy-button"
          >
            Deploy now
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* ❌ 9. Má prática: elementos com aria-hidden e alt ao mesmo tempo */}
        <a href="#">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {/* ❌ 10. Má prática: texto fora de um contêiner acessível */}
          Aprenda
        </a>
      </footer>
    </div>
  );
}
