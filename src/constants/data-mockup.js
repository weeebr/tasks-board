const boardData = {
  areas: [
    { name: "Today" },
    { name: "Tomorrow" },
    { name: "This week" },
    { name: "Next monday" },
    { name: "Jan" },
    { name: "2022" },
    { name: "Someday" }
  ],
  columns: [
    { name: "Ich (🧠⚕️ + Tasks)", color: "#2196f3" },
    { name: "Freunde + Soziales", color: "#9c27b0" },
    { name: "Familie + Partnerschaft", color: "#e91e63" },
    { name: "Beruf + Finanzen", color: "#fdd835" },
    { name: "💪⚕️ + Fitness", color: "#8bc34a" },
  ]
};
// localStorage.setItem('tasks', JSON.stringify(
const tasks = [
  {
    "id": 0,
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Schneiderin"
  },
  {
    "id": 1,
    "areaIdx": 0,
    "colIdx": 0,
    "title": "MSC"
  },
  {
    "id": 2,
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Einscannen"
  },
  {
    "id": 3,
    "areaIdx": 1,
    "colIdx": 1,
    "title": "Normal News"
  },
  {
    "id": 4,
    "areaIdx": 0,
    "colIdx": 4,
    "title": "Spiegelritual"
  },
  {
    "id": 5,
    "areaIdx": 0,
    "colIdx": 4,
    "title": "Zähneputzen"
  },
  {
    "id": 6,
    "areaIdx": 1,
    "colIdx": 4,
    "title": "No weed"
  },
  {
    "id": 7,
    "areaIdx": 1,
    "colIdx": 4,
    "title": "Migros"
  },
  {
    "id": 8,
    "areaIdx": 3,
    "colIdx": 3,
    "title": "Finance News"
  },
  {
    "id": 9,
    "areaIdx": 1,
    "colIdx": 4,
    "title": "Kochen"
  },
  {
    "id": 10,
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Kredit 4.7%"
  },
  {
    "id": 11,
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Brot einkaufen"
  },
  {
    "id": 12,
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Therapie"
  },
  {
    "id": 13,
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Bettrecherche"
  },
  {
    "id": 14,
    "areaIdx": 4,
    "colIdx": 4,
    "title": "Zahnseide"
  },
  {
    "id": 15,
    "areaIdx": 4,
    "colIdx": 0,
    "title": "#1 Goal in Life"
  },
  {
    "id": 16,
    "areaIdx": 4,
    "colIdx": 0,
    "title": "#1 Goal next months"
  },
  {
    "id": 17,
    "areaIdx": 4,
    "colIdx": 3,
    "title": "PostFinance kündigen"
  },
  {
    "id": 18,
    "areaIdx": 6,
    "colIdx": 3,
    "title": "Private Equity"
  },
  {
    "id": 19,
    "areaIdx": 6,
    "colIdx": 3,
    "title": "Blackstone"
  },
  {
    "id": 20,
    "areaIdx": 2,
    "colIdx": 3,
    "title": "SAND/MATIC"
  },
  {
    "id": 21,
    "areaIdx": 2,
    "colIdx": 3,
    "title": "Airdrops: Sassano/Bankless"
  },
  {
    "id": 22,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Alex"
  },
  {
    "id": 23,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Sey"
  },
  {
    "id": 24,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Mama"
  },
  {
    "id": 25,
    "areaIdx": 2,
    "colIdx": 0,
    "title": "IKEA"
  },
  {
    "id": 26,
    "areaIdx": 2,
    "colIdx": 0,
    "title": "OBI"
  },
  {
    "id": 27,
    "areaIdx": 2,
    "colIdx": 0,
    "title": "Aufräumen"
  },
  {
    "id": 28,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Bologna (Apr)"
  },
  {
    "id": 29,
    "areaIdx": 2,
    "colIdx": 0,
    "title": "Familienfilme"
  },
  {
    "id": 30,
    "areaIdx": 6,
    "colIdx": 0,
    "title": "2nd email"
  },
  {
    "id": 31,
    "areaIdx": 6,
    "colIdx": 0,
    "title": "2nd phone SIM"
  },
  {
    "id": 32,
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Buch lesen"
  },
  {
    "id": 33,
    "areaIdx": 2,
    "colIdx": 3,
    "title": "Neon: eBill Merki"
  },
  {
    "id": 34,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Tamino (Do)"
  },
  {
    "id": 35,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Sevi+Anna"
  },
  {
    "id": 36,
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Michal"
  }
]

export { boardData, tasks }
