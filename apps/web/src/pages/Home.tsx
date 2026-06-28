import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Atlas AI
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        React Router is ready.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        This app has a simple route structure, Tailwind CSS, and shadcn-ready
        configuration so you can add UI components as needed.
      </p>
      <div className="mt-8 flex gap-3">
        <Link className="rounded-md bg-primary px-4 py-2 text-primary-foreground" to="/about">
          View about page
        </Link>
      </div>
    </main>
  );
}
