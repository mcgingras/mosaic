const TOGGLE_ITEM = 'TOGGLE_ITEM';

export function toggleItem(itemId){
    return {
        type: TOGGLE_ITEM,
        itemId
    }
}