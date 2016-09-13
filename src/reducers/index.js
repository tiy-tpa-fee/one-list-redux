function reducer(state, action) {
  switch (action.type) {

    case 'ITEM_CREATE':
      return [...state, action.item]

    case 'ITEM_REMOVE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]

    case 'ITEM_COMPLETE':
      const items = state.slice()
      items[action.index].complete = !items[action.index].complete
      return items

    default:
      return state
  }
}

export default reducer
