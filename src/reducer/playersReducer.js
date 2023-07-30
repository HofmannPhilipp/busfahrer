export const ACTIONS = {
  SET_PlAYERS: "SET_PLAYERS",
  DRAW_CARD_FROM_DECK: "DRAW_CARD_FROM_DECK",
  SET_ACTIVE_PLAYER: "SET_ACTIVE_PLAYER",
  RESET_PLAYERS_CARDS: "RESET_PLAYERS_CARDS",
};

export const initialState = {
  player_amount: 0,
  players: [
    // {
    //   name: "Philip",
    //   cards: [],
    //   activePlayer: true,
    // },
    // {
    //   name: "Cillian",
    //   cards: [],
    //   activePlayer: false,
    // },
  ],
};

export function playersReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_PlAYERS:
      return { ...state, players: payload, player_amount: payload.length };

    case ACTIONS.DRAW_CARD_FROM_DECK:
      return {
        ...state,
        players: state.players.map((player) =>
          player.name === payload.name
            ? {
                ...player,
                cards: [...player.cards, payload.card].sort(
                  (a, b) => a.rank - b.rank
                ),
              }
            : player
        ),
      };
    case ACTIONS.SET_ACTIVE_PLAYER:
      return {
        ...state,
        players: state.players.map((player) =>
          player.name === payload.name
            ? { ...player, activePlayer: payload.active }
            : player
        ),
      };
    case ACTIONS.RESET_PLAYERS_CARDS:
      return {
        ...state,
        players: state.players.map((player) => ({ ...player, cards: [] })),
      };
  }
}
