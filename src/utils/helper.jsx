export const playStages = [
  {
    info: "Rot oder Schwarz ?",
    buttons: [
      { text: "Rot", value: "red", style: "bg-red-600" },
      { text: "Schwarz", value: "black", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Drunter oder Drüber ?",
    buttons: [
      { text: "↓", value: "down", style: "bg-zinc-600" },
      { text: "=", value: "equal", style: "bg-zinc-600" },
      { text: "↑", value: "up", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Innerhalb oder Außerhalb oder Gleich ?",
    buttons: [
      { text: "innerhalb", value: "inside", style: "bg-zinc-600" },
      { text: "=", value: "equal", style: "bg-zinc-600" },
      { text: "außerhalb", value: "outside", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Gleich oder Anders ?",
    buttons: [
      { text: "♣", value: "club", style: "bg-white text-black" },
      { text: "♠", value: "spade", style: "bg-white text-black" },
      { text: "♦", value: "diamond", style: "bg-white text-red-600" },
      { text: "♥", value: "heart", style: "bg-white text-red-600" },
    ],
  },
];
