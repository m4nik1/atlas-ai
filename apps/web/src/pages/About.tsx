import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Keep page-level route components in <code>src/pages</code> and route
        definitions in <code>src/routes/router.tsx</code>.
      </p>
      <Link className="mt-8 text-primary underline-offset-4 hover:underline" to="/">
        Back home
      </Link>
    </main>
  );
}
