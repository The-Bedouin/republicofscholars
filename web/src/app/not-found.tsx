import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-black/70">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block btn-primary">Return Home</Link>
      </div>
    </section>
  );
}


