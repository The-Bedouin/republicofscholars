export const metadata = { title: "Team" };

const people = [
  { name: "Leader One", role: "Executive Director" },
  { name: "Leader Two", role: "Program Lead" },
  { name: "Advisor One", role: "Advisory Board" },
];

export default function TeamPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-2xl font-semibold">Our Team</h1>
        <p className="mt-2 text-black/70 max-w-2xl">
          A dedicated group of leaders, advisors, and volunteers committed to student success.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <li key={p.name} className="rounded-lg border border-black/10 p-5">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-black/70">{p.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


