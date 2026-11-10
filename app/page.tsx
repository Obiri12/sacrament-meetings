
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Welcome Section */}
      <section className="rounded-2xl bg-blue-900 px-8 py-16 text-center text-white shadow-lg">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
          Sunday Worship Planning
        </p>

        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Sacrament Meeting Planner
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-100">
          A simple application for organizing, managing, and viewing
          sacrament meeting programs.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/meetings"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-100"
          >
            View All Meetings
          </Link>

          <Link
            href="/meetings/current"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Current Sunday Meeting
          </Link>
        </div>
      </section>

      {/* Meetinghouse Photograph */}
      <section className="my-10">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/meeting-house.jpg"
            alt="Latter-day Saint meetinghouse"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Application Features */}
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            Plan Meetings
          </h2>
          <p className="text-gray-600">
            Organize hymns, prayers, speakers, announcements, and meeting
            assignments.
          </p>
        </article>

        <article className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            View Programs
          </h2>
          <p className="text-gray-600">
            Browse previous meeting programs and view their details.
          </p>
        </article>

        <article className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            Print Programs
          </h2>
          <p className="text-gray-600">
            Open a meeting program and prepare a clean version for printing.
          </p>
        </article>
      </section>
    </main>
  );
}
