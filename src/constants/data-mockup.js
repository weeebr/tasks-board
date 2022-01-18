const boardData = {
  columns: [
    { name: "Ich (🧠⚕️ + Tasks)", color: '#2196f3', areas: [
      { name: "Today" },
      { name: "Tomorrow" },
      { name: "This week" },
      { name: "Next monday" },
      { name: "This month" },
      { name: "2022" },
      { name: "Someday" }
    ]},
    { name: "Freunde + Soziales", color: '#9c27b0', areas: [
      { name: "Today" },
      { name: "Tomorrow" },
      { name: "This week" },
      { name: "Next monday" },
      { name: "This month" },
      { name: "2022" },
      { name: "Someday" }
    ]},
    { name: "Familie + Partnerschaft", color: '#e91e63', areas: [
      { name: "Today" },
      { name: "Tomorrow" },
      { name: "This week" },
      { name: "Next monday" },
      { name: "This month" },
      { name: "2022" },
      { name: "Someday" }
    ]},
    { name: "Beruf + Finanzen", color: '#fdd835', areas: [
      { name: "Today" },
      { name: "Tomorrow" },
      { name: "This week" },
      { name: "Next monday" },
      { name: "This month" },
      { name: "2022" },
      { name: "Someday" }
    ]},
    { name: "💪⚕️ + Fitness", color: '#8bc34a', areas: [
      { name: "Today" },
      { name: "Tomorrow" },
      { name: "This week" },
      { name: "Next monday" },
      { name: "This month" },
      { name: "2022" },
      { name: "Someday" }
    ]}
  ]
};
// sessionStorage.setItem('tasks', JSON.stringify(
const tasks = [
  {
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Schneiderin"
  },
  {
    "areaIdx": 0,
    "colIdx": 0,
    "title": "MSC"
  },
  {
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Einscannen"
  },
  {
    "areaIdx": 1,
    "colIdx": 1,
    "title": "Normal News"
  },
  {
    "areaIdx": 0,
    "colIdx": 4,
    "title": "Spiegelritual"
  },
  {
    "areaIdx": 0,
    "colIdx": 4,
    "title": "Zähneputzen"
  },
  {
    "areaIdx": 1,
    "colIdx": 4,
    "title": "No weed"
  },
  {
    "areaIdx": 1,
    "colIdx": 4,
    "title": "Migros"
  },
  {
    "areaIdx": 3,
    "colIdx": 3,
    "title": "Finance News"
  },
  {
    "areaIdx": 1,
    "colIdx": 4,
    "title": "Kochen"
  },
  {
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Kredit 4.7%"
  },
  {
    "areaIdx": 1,
    "colIdx": 0,
    "title": "Brot einkaufen"
  },
  {
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Therapie"
  },
  {
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Bettrecherche"
  },
  {
    "areaIdx": 4,
    "colIdx": 4,
    "title": "Zahnseide"
  },
  {
    "areaIdx": 4,
    "colIdx": 0,
    "title": "#1 Goal in Life"
  },
  {
    "areaIdx": 4,
    "colIdx": 0,
    "title": "#1 Goal next months"
  },
  {
    "areaIdx": 4,
    "colIdx": 3,
    "title": "PostFinance kündigen"
  },
  {
    "areaIdx": 6,
    "colIdx": 3,
    "title": "Private Equity"
  },
  {
    "areaIdx": 6,
    "colIdx": 3,
    "title": "Blackstone"
  },
  {
    "areaIdx": 2,
    "colIdx": 3,
    "title": "SAND/MATIC"
  },
  {
    "areaIdx": 2,
    "colIdx": 3,
    "title": "Airdrops: Sassano/Bankless"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Alex"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Sey"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Mama"
  },
  {
    "areaIdx": 2,
    "colIdx": 0,
    "title": "IKEA"
  },
  {
    "areaIdx": 2,
    "colIdx": 0,
    "title": "OBI"
  },
  {
    "areaIdx": 2,
    "colIdx": 0,
    "title": "Aufräumen"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Bologna (Apr)"
  },
  {
    "areaIdx": 2,
    "colIdx": 0,
    "title": "Familienfilme"
  },
  {
    "areaIdx": 6,
    "colIdx": 0,
    "title": "2nd email"
  },
  {
    "areaIdx": 6,
    "colIdx": 0,
    "title": "2nd phone SIM"
  },
  {
    "areaIdx": 0,
    "colIdx": 0,
    "title": "Buch lesen"
  },
  {
    "areaIdx": 2,
    "colIdx": 3,
    "title": "Neon: eBill Merki"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Tamino (Do)"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Sevi+Anna"
  },
  {
    "areaIdx": 2,
    "colIdx": 1,
    "title": "Michal"
  }
]

export { boardData, tasks }
