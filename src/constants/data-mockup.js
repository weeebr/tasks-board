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

const tasks = [
  { title: "Another Task", description: "Description", colIdx: 0, areaIdx: 0 },
  { title: "Another Task", description: "Description", colIdx: 2, areaIdx: 2 },
  { title: "Another Task", description: "Description", colIdx: 3, areaIdx: 4 },
  { title: "Another Task", description: "Description", colIdx: 4, areaIdx: 0 },
  { title: "Another Task", description: "Description", colIdx: 4, areaIdx: 0 },
  { title: "Another Task", description: "Description", colIdx: 2, areaIdx: 6 },
  { title: "Another Task 3", description: "Description", colIdx: 1, areaIdx: 6 },
];

export { boardData, tasks }
