import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardData = {
    columns: [
      { name: "Ich (🧠⚕️ + Tasks)", color: '#2196f3', areas: [
        { idx: 0, name: "Today", tasks: [
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 1, name: "Tomorrow", tasks: [
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 2, name: "This week", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 3, name: "Next monday", tasks: [
            { title: "Really another task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 4, name: "This month", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Task 2", description: "Description" }
          ]
        },
        { idx: 5, name: "2022", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        }],
      },
      { name: "Freunde + Soziales", color: '#9c27b0', areas: [
        { idx: 0, name: "Today", tasks: [
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 1, name: "Tomorrow", tasks: [
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 2, name: "This week", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 3, name: "Next monday", tasks: [
            { title: "Really another task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 4, name: "This month", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Task 2", description: "Description" }
          ]
        },
        { idx: 5, name: "2022", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        }]
      },
      { name: "Familie + Partnerschaft", color: '#e91e63', areas: [
        { idx: 0, name: "Today", tasks: [
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 1, name: "Tomorrow", tasks: [
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 2, name: "This week", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 3, name: "Next monday", tasks: [
            { title: "Really another task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 4, name: "This month", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Task 2", description: "Description" }
          ]
        },
        { idx: 5, name: "2022", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        }]
      },
      { name: "Beruf + Finanzen", color: '#fdd835', areas: [
        { idx: 0, name: "Today", tasks: [
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 1, name: "Tomorrow", tasks: [
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 2, name: "This week", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 3, name: "Next monday", tasks: [
            { title: "Really another task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 4, name: "This month", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Task 2", description: "Description" }
          ]
        },
        { idx: 5, name: "2022", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        }],
      },
      { name: "💪⚕️ + Fitness", color: '#8bc34a', areas: [
        { idx: 0, name: "Today", tasks: [
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 1, name: "Tomorrow", tasks: [
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 2, name: "This week", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 3, name: "Next monday", tasks: [
            { title: "Really another task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        },
        { idx: 4, name: "This month", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Task 2", description: "Description" }
          ]
        },
        { idx: 5, name: "2022", tasks: [
            { title: "My Task", description: "Description" },
            { title: "Another Task", description: "Description" },
            { title: "Task 3", description: "Description" }
          ]
        }]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getAreasOrderedByIdx(col: any) {
    return col.areas.sort((a: any, b: any) => a.idx - b.idx);
  }

}




