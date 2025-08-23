import { motion } from "framer-motion";
import type { ScheduleItem } from "../types";

const items: ScheduleItem[] = [
  {
    time: "1:00 PM",
    title: "Pre-Show Cocktails & Networking",
    desc: "Meet designers, press, and creators over curated cocktails — perfect for building connections before the show.",
  },
  {
    time: "2:00 PM",
    title: "Doors Open & Expo",
    desc: "Designer pop-ups, beauty labs, and media check-ins. Explore limited drops and interactive displays.",
  },
  {
    time: "3:30 PM",
    title: "Talk — The Future of Sustainable Fashion",
    desc: "A short panel with designers and eco-innovators discussing materials, circular design, and supply-chain transparency.",
  },
  {
    time: "4:00 PM",
    title: "Runway Session I",
    desc: "Emerging labels debut capsule collections. Expect bold silhouettes and experimental tailoring.",
  },
  {
    time: "5:30 PM",
    title: "Intermission — Street Food & Live DJs",
    desc: "Grab a bite from local vendors while DJs set a lively mood — a great time to visit the photo wall and lounges.",
  },
  {
    time: "7:00 PM",
    title: "Runway Session II",
    desc: "Headliners present signature lines with live music, immersive lighting, and cinematic staging.",
  },
  // {
  //   time: "9:00 PM",
  //   title: "After-Party — Beats & Showcases",
  //   desc: "An exclusive evening of music, surprise showcases, and late-night pop-ups. Open to ticket-holders and VIP guests.",
  // },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Event Highlights
          </h2>
          <p className="mt-3 text-gray-600">
            A curated timeline of moments — from relaxed meetups to headline
            runway sessions. Plan your evening and don't miss the highlights.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            // simple visual badge logic (keeps the ScheduleItem shape unchanged)
            const badge =
              idx === 0
                ? "Free"
                : idx === 2
                ? "Talk"
                : idx === 4
                ? "Break"
                : idx === items.length - 1
                ? "VIP"
                : idx === 1 || idx === 3
                ? "Ticketed"
                : "Event";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      {/* small decorative icon */}
                      <svg
                        className="w-6 h-6 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 8v8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>

                      <div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">
                          {item.time}
                        </div>
                        <h3 className="mt-1 text-lg sm:text-xl font-semibold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      badge === "Free"
                        ? "bg-green-50 text-green-700"
                        : badge === "VIP"
                        ? "bg-yellow-50 text-yellow-700"
                        : badge === "Talk"
                        ? "bg-indigo-50 text-indigo-700"
                        : badge === "Break"
                        ? "bg-gray-50 text-gray-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                    aria-hidden
                  >
                    {badge}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 text-sm">{item.desc}</p>

                {/* small footer with micro-info */}
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <div>Location: Main Stage</div>
                  <div>
                    {/* approximate duration — purely presentational */}
                    Duration: ~{idx === 3 ? "30 mins" : "45 mins"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
