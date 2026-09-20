import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black px-5 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(109,40,217,0.5),transparent_35%),radial-gradient(circle_at_20%_75%,rgba(239,35,60,0.22),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="text-8xl font-black text-brand-purple sm:text-9xl">404</p>
        <h1 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
          Esta página no existe
          <span className="text-brand-red">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
          La dirección puede estar incompleta o la página pudo cambiar.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
          >
            Volver al inicio
          </Link>
          <Link
            href="/catalogo"
            className="rounded-full border border-brand-lilac/50 px-7 py-4 text-sm font-black uppercase tracking-wider text-brand-lilac transition hover:bg-brand-lilac hover:text-brand-black"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
