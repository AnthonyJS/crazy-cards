const actions = {
  TOGGLE_CARD_SELECTION: 'TOGGLE_CARD_SELECTION'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_CARD_SELECTION:
      return state.includes(action.payload)
        ? [...state.filter(item => item != action.payload)]
        : [...state, action.payload]
    default:
      return state
  }
}

export { actions, reducer }
