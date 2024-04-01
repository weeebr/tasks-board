const boardData = {
  areas: [
    { name: "Overdue" },
    { name: "Urgent" },
    { name: "Soon" },
    { name: "within 1 month" },
    { name: "Someday" }
  ],
  columns: [
      { name: "Work 💼", color: "#fdd835" },
      { name: "Money 📈", color: "#fdd835" },
      { name: "People 👫", color: "#9c27b0" },
      { name: "Learning 🌱 ", color: "#8bc34a" },
      { name: "Me 💪⚕️", color: "#2196f3" },
      { name: "Home 🏠", color: "#2196f3" },
      { name: "Admin 📅", color: "#e91e63" },
  ]
};
// localStorage.setItem('tasks', JSON.stringify(
const tasks = [
  {
      "id": 1,
      "rowIdx": 0,
      "colIdx": 0,
      "title": "MSC"
  },
  {
      "id": 3,
      "rowIdx": 1,
      "colIdx": 1,
      "title": "Normal News"
  },
  {
      "id": 4,
      "rowIdx": 0,
      "colIdx": 4,
      "title": "Spiegelritual"
  },
  {
      "id": 5,
      "rowIdx": 1,
      "colIdx": 4,
      "title": "Zähneputzen"
  },
  {
      "id": 6,
      "rowIdx": 1,
      "colIdx": 4,
      "title": "No weed"
  },
  {
      "id": 8,
      "rowIdx": 3,
      "colIdx": 3,
      "title": "Finance News"
  },
  {
      "id": 9,
      "rowIdx": 1,
      "colIdx": 4,
      "title": "Kochen"
  },
  {
      "id": 14,
      "rowIdx": 4,
      "colIdx": 4,
      "title": "Zahnseide"
  },
  {
      "id": 15,
      "rowIdx": 4,
      "colIdx": 0,
      "title": "#1 Goal in Life"
  },
  {
      "id": 16,
      "rowIdx": 4,
      "colIdx": 0,
      "title": "#1 Goal next months"
  },
  {
      "id": 17,
      "rowIdx": 4,
      "colIdx": 3,
      "title": "PostFinance kündigen"
  },
  {
      "id": 18,
      "rowIdx": 6,
      "colIdx": 3,
      "title": "Private Equity"
  },
  {
      "id": 19,
      "rowIdx": 6,
      "colIdx": 3,
      "title": "Blackstone"
  },
  {
      "id": 20,
      "rowIdx": 2,
      "colIdx": 3,
      "title": "SAND/MATIC"
  },
  {
      "id": 21,
      "rowIdx": 2,
      "colIdx": 3,
      "title": "Airdrops: Sassano/Bankless"
  },
  {
      "id": 22,
      "rowIdx": 2,
      "colIdx": 1,
      "title": "Alex"
  },
  {
      "id": 25,
      "rowIdx": 2,
      "colIdx": 0,
      "title": "IKEA"
  },
  {
      "id": 26,
      "rowIdx": 2,
      "colIdx": 0,
      "title": "OBI"
  },
  {
      "id": 27,
      "rowIdx": 2,
      "colIdx": 0,
      "title": "Aufräumen"
  },
  {
      "id": 28,
      "rowIdx": 2,
      "colIdx": 1,
      "title": "Bologna (Apr)"
  },
  {
      "id": 30,
      "rowIdx": 6,
      "colIdx": 0,
      "title": "2nd email"
  },
  {
      "id": 31,
      "rowIdx": 6,
      "colIdx": 0,
      "title": "2nd phone SIM"
  },
  {
      "id": 32,
      "rowIdx": 0,
      "colIdx": 0,
      "title": "Buch lesen"
  },
  {
      "id": 35,
      "rowIdx": 2,
      "colIdx": 1,
      "title": "Sevi+Anna"
  },
  {
      "id": 36,
      "rowIdx": 2,
      "colIdx": 1,
      "title": "Michal"
  },
  {
      "rowIdx": 0,
      "colIdx": 0,
      "title": "Kaffee",
      "id": 37
  },
  {
      "rowIdx": 0,
      "colIdx": 0,
      "title": "Papierrollen/Pflanzen?",
      "id": 38
  },
  {
      "rowIdx": 0,
      "colIdx": 3,
      "title": "Discord Fishtank",
      "id": 40
  },
  {
      "rowIdx": 2,
      "colIdx": 3,
      "title": "ledger erst connecten, dann metamask ok",
      "id": 39
  },
  {
      "rowIdx": 4,
      "colIdx": 0,
      "title": "Schreibe ein Essay: Wolf",
      "id": 41
  },
  {
      "rowIdx": 5,
      "colIdx": 4,
      "title": "Zahnarzt",
      "id": 33
  }
];

export { boardData, tasks }
