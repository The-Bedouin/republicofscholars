export const metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <section className="section">
      <div className="container prose max-w-none">
        <h1>Partners</h1>
        <p>
          We collaborate with universities, law firms, NGOs, and corporate organizations to
          expand opportunities for students across Nigeria.
        </p>
        <h2>Partner With Us</h2>
        <p>To explore partnerships, please contact <a href="mailto:partnerships@republicofscholars.org">partnerships@republicofscholars.org</a>.</p>
        <div className="not-prose mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 rounded-md border border-black/10 bg-white"></div>
          ))}
        </div>
      </div>
    </section>
  );
}


