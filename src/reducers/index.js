function reducer(state, action) {
  switch (action.type) {
    case 'ITEM_CREATE':
      return [...state, action.item]
    case 'ITEM_REMOVE':
      return state
    case 'ITEM_COMPLETE':
      return state
    default:
      return state
  }
}

export default reducer
