import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Register Your Interest
            </h2>
            <p className="mt-3 text-gray-600">
              Seats are limited. Share your details and we’ll send your
              confirmation.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                Skylight Hall, Addis Ababa
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                August 30, 2025
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                info@elysianrunway.com
              </li>
            </ul>
          </div>
          <div>
            {!sent ? (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="alex@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium"
                      htmlFor="tickets"
                    >
                      Tickets
                    </label>
                    <select
                      id="tickets"
                      name="tickets"
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                      defaultValue="1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center rounded-2xl border border-gray-900 bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition"
                  >
                    Submit
                  </button>
                  <p className="text-xs text-gray-500">
                    By submitting, you agree to our terms.
                  </p>
                </div>
              </form>
            ) : (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 p-6">
                <h3 className="text-xl font-semibold">Thanks! 🎉</h3>
                <p className="mt-2 text-gray-700">
                  Your registration was received. We’ll email your confirmation
                  shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
