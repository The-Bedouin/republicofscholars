export const metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-2xl font-semibold">Support the Initiative</h1>
        <p className="mt-2 max-w-2xl text-black/70">
          Your support enables mentorship, research labs, and career clinics that empower
          Nigerian law students.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-primary">Give via Paystack (placeholder)</button>
          <button className="btn-secondary">Other ways to support</button>
        </div>
      </div>
    </section>
  );
}


