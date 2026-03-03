export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-05-10",
    time: "09:00",
  },
  {
    title: "JSConf US 2026",
    image: "/images/event2.png",
    slug: "jsconf-us-2026",
    location: "Austin, TX, USA",
    date: "2026-06-15",
    time: "10:00",
  },
  {
    title: "Node+JS Interactive",
    image: "/images/event3.png",
    slug: "node-js-interactive-2026",
    location: "San Francisco, CA, USA",
    date: "2026-07-20",
    time: "08:30",
  },
  {
    title: "GitHub Universe 2026",
    image: "/images/event4.png",
    slug: "github-universe-2026",
    location: "Las Vegas, NV, USA",
    date: "2026-09-01",
    time: "11:00",
  },
  {
    title: "Hackathon Week Tokyo",
    image: "/images/event5.png",
    slug: "hackathon-week-tokyo-2026",
    location: "Tokyo, Japan",
    date: "2026-08-05",
    time: "12:00",
  },
  {
    title: "Open Source Summit EU",
    image: "/images/event6.png",
    slug: "open-source-summit-eu-2026",
    location: "Dublin, Ireland",
    date: "2026-10-10",
    time: "09:30",
  },
];
