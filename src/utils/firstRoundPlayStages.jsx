export const ACTIONS = {
  RED_OR_BLACK: "RED_OR_BLACK",
  UP_OR_DOWN: "UP_OR_DOWN",
  INSIDE_OR_OUTSIDE: "INSIDE_OR_OUTSIDE",
  EQUAL_OR_DIFFRENT: "EQUAL_OR_DIFFRENT",
};
export const playStages = [
  {
    info: "Rot oder Schwarz ?",
    type: ACTIONS.RED_OR_BLACK,
    buttons: [
      { text: "Rot", value: "red", style: "bg-red-600" },
      { text: "Schwarz", value: "black", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Drunter oder Drüber ?",
    type: ACTIONS.UP_OR_DOWN,
    buttons: [
      { text: "↓", value: "down", style: "bg-zinc-600" },
      { text: "=", value: "equal", style: "bg-zinc-600" },
      { text: "↑", value: "up", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Innerhalb oder Außerhalb oder Gleich ?",
    type: ACTIONS.INSIDE_OR_OUTSIDE,
    buttons: [
      { text: "innerhalb", value: "inside", style: "bg-zinc-600" },
      { text: "=", value: "equal", style: "bg-zinc-600" },
      { text: "außerhalb", value: "outside", style: "bg-zinc-600" },
    ],
  },
  {
    info: "Gleich oder Anders ?",
    type: ACTIONS.EQUAL_OR_DIFFRENT,
    buttons: [
      { text: "♣", value: "club", style: "bg-white text-black" },
      { text: "♠", value: "spade", style: "bg-white text-black" },
      { text: "♦", value: "diamond", style: "bg-white text-red-600" },
      { text: "♥", value: "heart", style: "bg-white text-red-600" },
    ],
  },
];
