import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Featured testimonial shown on the left (video-style panel).
// To use a real video: replace the poster block below with a <video> tag
// (e.g. <video src={...} poster={...} controls className="..." />).
const featured = {
  quote: "Meeting load disappeared because partnering with Tibos made our IT effortless.",
  caption: "It really made the team think and react.",
  name: "Alan King",
  role: "CEO at Workplace Options",
};

// Add as many as you like — they paginate automatically (4 per page).
const testimonials = [
  {
    quote:
      "Tibos has been a huge timesaver for us. I don't even have to chase updates — their team keeps everything running and I can focus on what was discussed if I'm not able to join the call.",
    name: "Sean Santschi",
    role: "Product Leader at Motive",
  },
  {
    quote:
      "I would definitely recommend Tibos to other companies because of the ease of use, the simple onboarding, and all of its integrations with different software.",
    name: "Emilia Ceballos",
    role: "Chief of Staff at KitchenSync",
  },
  {
    quote:
      "Our most important resource is our people, and their most important resource is their time. Tibos has been instrumental in breaking down some of the silos that we have.",
    name: "Stephen Hull",
    role: "VP of Customer Experience at Dynatrace",
  },
  {
    quote:
      "With Tibos, my team is clear on what they're responsible for bringing to the table. It's helped a lot with time savings, efficiency, but also accountability.",
    name: "Sarah Mercedes",
    role: "Senior Sales Manager at HubSpot",
  },
  {
    quote:
      "The migration to Microsoft 365 was seamless. Zero downtime, clear communication, and the support team was available every step of the way.",
    name: "Rahul Nair",
    role: "Head of IT at Vega Retail",
  },
  {
    quote:
      "Their cybersecurity assessment caught gaps we didn't know existed. We now feel genuinely secure and compliant across all our offices.",
    name: "Divya Menon",
    role: "Compliance Lead at Finserv",
  },
  {
    quote:
      "Azure costs were spiralling before Tibos stepped in. They optimised our infrastructure and cut our monthly cloud spend by nearly a third.",
    name: "Karthik Raja",
    role: "CTO at Stackline",
  },
  {
    quote:
      "Rolling out Teams across 300 employees could have been chaos. Tibos made it smooth, with training and adoption support that actually stuck.",
    name: "Anita George",
    role: "People Ops at Brightpath",
  },
  {
    quote:
      "Responsive, knowledgeable, and proactive. Tibos feels less like a vendor and more like an extension of our own IT department.",
    name: "Mohan Iyer",
    role: "Operations Director at Cargologix",
  },
  {
    quote:
      "From hardware procurement to deployment, everything arrived configured and ready to go. It saved our team weeks of setup work.",
    name: "Fatima Sheikh",
    role: "Admin Manager at Novacare",
  },
  {
    quote:
      "Their BPO support scaled with us during peak season without a hitch. Quality stayed high and our customers never felt the difference.",
    name: "Vikram Desai",
    role: "Customer Success at Loopwell",
  },
  {
    quote:
      "Smart communication setup transformed how our branches stay connected. Calls, video, and messaging finally live in one reliable place.",
    name: "Neha Kapoor",
    role: "Branch Lead at Unity Bank",
  },
];

const PER_PAGE = 4;

const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-fuchsia-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({ t, index }) => (
  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">“{t.quote}”</p>
    <div className="mt-6 flex items-center gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} text-sm font-bold text-white`}
      >
        {getInitials(t.name)}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
        <p className="text-xs text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance through pages
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setPage((p) => (p + 1) % totalPages);
    }, 7000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const goTo = (p) => {
    setDirection(p > page ? 1 : -1);
    setPage(p);
  };
  const next = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };
  const prev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const start = page * PER_PAGE;
  const pageItems = testimonials.slice(start, start + PER_PAGE);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            What our customers
          </span>{" "}
          <span className="text-gray-900">are saying</span>
        </h2>

        {/* Trust bar — replace the rating/count with your real review numbers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="font-medium">Rated 4.9/5 by 200+ businesses across India</span>
        </div>

        {/* Main grid: featured (left) + paginated cards (right) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: featured video-style panel */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-5 shadow-md sm:p-6">
              {/* Video poster placeholder */}
              <button
                type="button"
                aria-label="Play customer story"
                className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900"
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/30 blur-2xl" />
                <span className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-violet-500/30 blur-2xl" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition group-hover:scale-110">
                  <Play className="ml-0.5 h-7 w-7 fill-blue-600 text-blue-600" />
                </span>
                <span className="absolute bottom-3 left-4 right-4 text-left text-sm font-medium text-white/90">
                  {featured.caption}
                </span>
              </button>

              {/* featured quote */}
              <div className="mt-6 flex flex-1 flex-col justify-center px-1">
                <Quote className="h-7 w-7 fill-blue-100 text-blue-200" />
                <p className="mt-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                  “{featured.quote}”
                </p>
                <div className="mt-5">
                  <h4 className="text-base font-bold text-gray-900">{featured.name}</h4>
                  <p className="text-sm text-gray-500">{featured.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: paginated 2x2 grid of text cards */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col">
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  >
                    {pageItems.map((t, i) => (
                      <TestimonialCard key={t.name} t={t} index={start + i} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination controls — page 1, 2, 3 ... */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-5 lg:justify-end">
                  <button
                    onClick={prev}
                    aria-label="Previous page"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to page ${i + 1}`}
                        aria-current={page === i ? "true" : undefined}
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          page === i ? "w-7 bg-blue-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    {page + 1} / {totalPages}
                  </span>

                  <button
                    onClick={next}
                    aria-label="Next page"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
