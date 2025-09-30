export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-black/70">We welcome partnerships, mentors, and student inquiries.</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: <a className="text-[--color-brand] hover:underline" href="mailto:info@republicofscholars.org">info@republicofscholars.org</a></li>
            <li>Location: Nigeria</li>
          </ul>
        </div>
        <form className="rounded-lg border border-black/10 p-5">
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded-md border border-black/20 px-3 py-2" placeholder="Your name" />
          <label className="block text-sm font-medium mt-4">Email</label>
          <input className="mt-1 w-full rounded-md border border-black/20 px-3 py-2" type="email" placeholder="you@example.com" />
          <label className="block text-sm font-medium mt-4">Message</label>
          <textarea className="mt-1 w-full rounded-md border border-black/20 px-3 py-2" rows={5} placeholder="How can we help?" />
          <button type="button" className="mt-4 btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}


