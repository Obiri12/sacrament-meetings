

import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-11-08",
    meetingType: "testimony",
    presiding: "Bishop John Mensah",
    conducting: "Brother Daniel Asiedu",
    announcements: [
      "Ward temple trip will take place next Saturday.",
      "Youth activity is scheduled for Wednesday."
    ],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Brother Michael Owusu",
    wardBusiness: [
      { description: "Sustain the new Sunday School teacher." }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "As Now We Take the Sacrament"
    },
    speakers: [
      {
        name: "Sister Grace Boateng",
        topic: "Faith in Jesus Christ",
        type: "speaker"
      },
      {
        name: "Brother Samuel Osei",
        topic: "Personal Testimonies",
        type: "speaker"
      }
    ],
    closingHymn: { number: 100, title: "Nearer, Dearer Place to Thee" },
    closingPrayer: "Brother Peter Addo"
  },
  {
    id: 2,
    date: "2026-11-01",
    meetingType: "regular",
    presiding: "Bishop John Mensah",
    conducting: "Brother Daniel Asiedu",
    announcements: [
      "Primary children will present a special activity next Sunday."
    ],
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Brother David Kofi",
    wardBusiness: [
      { description: "Welcome new members to the ward." }
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 172,
      title: "In Humility, Our Savior"
    },
    speakers: [
      {
        name: "Sister Mary Owusu",
        topic: "The Power of Prayer",
        type: "speaker"
      },
      {
        name: "Ward Choir",
        topic: "A Musical Tribute",
        type: "musical-number"
      }
    ],
    closingHymn: { number: 85, title: "How Firm a Foundation" },
    closingPrayer: "Sister Esther Mensah"
  },
  {
    id: 3,
    date: "2026-10-25",
    meetingType: "regular",
    presiding: "Bishop John Mensah",
    conducting: "Brother Daniel Asiedu",
    announcements: [
      "Members are invited to attend the ward service project."
    ],
    openingHymn: { number: 100, title: "Nearer, Dearer Place to Thee" },
    openingPrayer: "Brother Joseph Antwi",
    wardBusiness: [
      { description: "Report on the ward service project." }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 181,
      title: "Jesus of Nazareth, Savior and King"
    },
    speakers: [
      {
        name: "Brother Emmanuel Boateng",
        topic: "Serving One Another",
        type: "speaker"
      }
    ],
    closingHymn: { number: 129, title: "Where Can I Turn for Peace?" },
    closingPrayer: "Sister Abigail Osei"
  },
  {
    id: 4,
    date: "2026-10-18",
    meetingType: "stake",
    presiding: "Stake President Kwaku Asare",
    conducting: "Brother Daniel Asiedu",
    announcements: [
      "Stake leadership meeting will follow the main session."
    ],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Brother Michael Owusu",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: "As Now We Take the Sacrament"
    },
    speakers: [
      {
        name: "President Kwaku Asare",
        topic: "Strengthening Families",
        type: "speaker"
      }
    ],
    closingHymn: { number: 85, title: "How Firm a Foundation" },
    closingPrayer: "Brother Peter Addo"
  },
  {
    id: 5,
    date: "2026-10-11",
    meetingType: "general",
    presiding: "President Kwaku Asare",
    conducting: "Sister Grace Boateng",
    announcements: [
      "Members are encouraged to participate in community service."
    ],
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Sister Mary Owusu",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: "In Humility, Our Savior"
    },
    speakers: [
      {
        name: "President Kwaku Asare",
        topic: "Following the Savior",
        type: "speaker"
      },
      {
        name: "Stake Choir",
        topic: "A Hymn of Praise",
        type: "musical-number"
      }
    ],
    closingHymn: { number: 100, title: "Nearer, Dearer Place to Thee" },
    closingPrayer: "Brother Samuel Osei"
  }
];

// Get all meetings, optionally filtered by date
export function getMeetings(date?: string): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return [...meetings].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

// Get one meeting by its ID
export function getMeetingById(
  id: number
): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}

// Get the meeting for the most recent Sunday
export function getCurrentSundayMeeting(
  today: Date
): SacramentMeeting | undefined {
  const sunday = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    )
  );

  sunday.setUTCDate(
    sunday.getUTCDate() - sunday.getUTCDay()
  );

  const sundayDate = sunday.toISOString().slice(0, 10);

  const currentMeeting = meetings.find(
    (meeting) => meeting.date === sundayDate
  );

  if (currentMeeting) {
    return currentMeeting;
  }

  return getMeetings().find(
    (meeting) => meeting.date <= sundayDate
  );
}
