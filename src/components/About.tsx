import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1554881070-74595ca2b74c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Backstage designer fitting"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A Celebration of Style & Story
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Elysian Runway spotlights visionary designers across Africa,
              blending couture with culture. Expect bold silhouettes,
              sustainable fabrics, and immersive staging that turns a fashion
              show into a narrative.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each season, the show embraces a central theme—whether it's
              heritage-inspired textiles, avant-garde experimentation, or the
              fusion of art and fashion. Our vision is to create an inclusive
              platform where creativity knows no bounds, highlighting the
              stories, struggles, and triumphs behind every collection.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Audiences can anticipate not just a showcase of clothing, but a
              sensory journey: live installations, music, and storytelling all
              combine to celebrate the rich diversity of African fashion while
              inspiring a global conversation about innovation and
              sustainability.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                Emerging Designers
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                Sustainable Fashion
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                Inclusive Casting
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900"
                />{" "}
                Live Photo Wall
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
