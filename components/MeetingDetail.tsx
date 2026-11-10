"use client";

import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md sm:p-10">
      <div className="mb-8 border-b border-gray-200 pb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
          Sacrament Meeting Program
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Sunday Worship Service
        </h1>

        <p className="mt-2 text-gray-600">{meeting.date}</p>

        <p className="mt-2 capitalize text-sm text-blue-800">
          {meeting.meetingType} Meeting
        </p>
      </div>

      <section className="mb-8 grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold text-gray-900">Presiding</h2>
          <p className="text-gray-600">{meeting.presiding}</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Conducting</h2>
          <p className="text-gray-600">{meeting.conducting}</p>
        </div>
      </section>

      {meeting.announcements &&
        meeting.announcements.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 border-b pb-2 text-xl font-bold text-gray-900">
              Announcements
            </h2>

            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              {meeting.announcements.map((announcement, index) => (
                <li key={index}>{announcement}</li>
              ))}
            </ul>
          </section>
        )}

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Opening Hymn
        </h2>
        <p className="text-gray-700">
          Hymn #{meeting.openingHymn.number}:{" "}
          {meeting.openingHymn.title}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Opening Prayer
        </h2>
        <p className="text-gray-700">{meeting.openingPrayer}</p>
      </section>

      {meeting.wardBusiness.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Ward Business
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Stake Business
        </h2>

        <p className="text-gray-700">
          {meeting.stakeBusiness ? "Yes" : "No"}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Sacrament Hymn
        </h2>

        <p className="text-gray-700">
          Hymn #{meeting.sacramentHymn.number}:{" "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Speakers and Musical Numbers
        </h2>

        <div className="space-y-4">
          {meeting.speakers.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-4"
            >
              <p className="font-semibold text-gray-900">
                {item.name}
              </p>

              <p className="text-gray-600">{item.topic}</p>

              <p className="mt-1 text-sm capitalize text-blue-800">
                {item.type.replace("-", " ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Closing Hymn
        </h2>

        <p className="text-gray-700">
          Hymn #{meeting.closingHymn.number}:{" "}
          {meeting.closingHymn.title}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Closing Prayer
        </h2>

        <p className="text-gray-700">{meeting.closingPrayer}</p>
      </section>

      <div className="mt-10 border-t pt-6 text-center print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Print Meeting Program
        </button>
      </div>
    </article>
  );
}