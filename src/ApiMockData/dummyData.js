

export const ApiMockResponse = [
  {
    id: 1,
    title: "Discover",
    cards: [
      {
        id: 1.1,
        title: "Task1",
        labels: [{ color: "#cf61a1", text: "Urgent" }],
        date: "2022-05-05",
        tasks: [
          { id: 1651319625559.8025, completed: true, text: "Task1_subtask1" },
          { id: 1651319629650.8945, completed: true, text: "Task1_subtask2" },
          { id: 1651319633774.9905, completed: true, text: "Task1_subtask3" },
        ],
        desc: "Task1 Detail Description",
      },
      {
        id: 1.2,
        title: "Task2",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        tasks: [],
      },
    ],
  },
  {
    id: 2,
    title: "Doing",
    cards: [
      {
        id: 2.1,
        title: "Task3",
        labels: [{ color: "#9975bd", text: "Database" }],
        date: "",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "restore db" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "In-Review",
    cards: [
      {
        id: 3.1,
        title: "Task4",
        labels: [{ color: "#8da377", text: "figma" }],
        date: "2022-05-06",
        tasks: [],
      },
    ],
  },
  {
    id: 4,
    title: "Completed",
    cards: [
      {
        id: 4.1,
        title: "Task5",
        labels: [{ color: "#4fcc25", text: "Payment API" }],
        date: "2022-05-04",
        tasks: [
          { id: 1651319820180.9648, completed: false, text: "GraphQl" },
          { id: 1651319833779.3252, completed: true, text: "Restful API" },
        ],
      },
    ],
  },
];
