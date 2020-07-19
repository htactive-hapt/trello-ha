import * as actionTypes from './types'

// List Action

export const addList = title => {
    return {
        type: actionTypes.ADD_LIST,
        payload: title
    }
}

export const editList = (listId, newListTitle) => {
    return {
        type: actionTypes.EDIT_LIST,
        payload: {
            listId,
            newListTitle
        }
    }
}


export const deleteList = listId => {
    return {
        type: actionTypes.DELETE_LIST,
        payload: {
            listId
        }
    }
}

// Card Action

export const addCard = (listId, cardName) => {
    console.log(cardName, 'cardName')

    return {
        type: actionTypes.ADD_CARD,
        payload: {
            listId,
            cardName
        }
    }
}

export const editCard = (id, listId, newCardName) => {
    console.log(id, listId, newCardName, 'id, listId, newCardName')

    return {
        type: actionTypes.EDIT_CARD,
        payload: {
            id,
            listId,
            newCardName
        }
    }
}

export const deleteCard = (id, listId) => {
    return {
        type: actionTypes.DELETE_CARD,
        payload: {
            id,
            listId
        }
    }
}