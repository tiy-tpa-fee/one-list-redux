export function createItem(text) {
  return {
    type: 'ITEM_CREATE',
    item: { text, complete: false }
  }
}

export function removeItem(index) {
  return {
    type: 'ITEM_REMOVE',
    index
  }
}

export function completeItem(index) {
  return {
    type: 'ITEM_COMPLETE',
    index
  }
}
