const mamClasses = [
  "26 + 27",
  "28 + 25",
  "29 + 23",
  "30 + 22",
  "31 + 21",
  "20 + 19",
  "18 + 17",
  "32",
  "33",
  "34",
  "35",
  "Revision"
];

const jsRevision = [
  "2–4",
  "4–6",
  "6–7",
  "7–8",
  "8–9",
  "9–10",
  "10–11",
  "11–12",
  "12–13",
  "13–14",
  "14–15",
  "14–15"
];

const reactRevision = [
  "0–2",
  "2–3",
  "3–4",
  "4–5",
  "5–6",
  "6–7",
  "7–8",
  "8–9",
  "9–10",
  "10–11",
  "11–12",
  "12–13"
];

export const schedule = Array.from(
  { length: 12 },
  (_, index) => {

    const day = 10 + index;

    const date = `2026-11-${String(day).padStart(2, "0")}`;

    return {
      date,

      tasks: [
        {
          id: `${date}-react`,
          title: "React.js",
          time: "5:00 – 6:30 AM",
          description: "Learn React.js"
        },
        {
          id: `${date}-supernova`,
          title: "Super Nova",
          time: "8:30 – 11:00 AM",
          description: "Super Nova session"
        },
        {
          id: `${date}-mam`,
          title: "Mam's Class",
          time: "11:00 AM – 12:30 PM",
          description: `Class ${mamClasses[index]}`
        },
        {
          id: `${date}-javascript`,
          title: "JavaScript Revision",
          time: "2:00 – 3:30 PM",
          description: `Revise hours ${jsRevision[index]}`
        },
        {
          id: `${date}-react-revision`,
          title: "React Revision",
          time: "In between",
          description: `Revise hours ${reactRevision[index]}`
        }
      ]
    };
  }
);