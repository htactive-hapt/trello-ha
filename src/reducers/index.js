import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

const initialListState = []

let listId = 0
let cardId = 0

const listsReducer = (state = initialListState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST: {
            listId += 1
            return [...state, {
                id: listId,
                title: action.payload,
                cards: []
            }]
        }
        case actionTypes.DELETE_LIST: {
            const { listId } = action.payload
            const list = []
            console.log(listId)
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== listId) list.push(state[i])
                console.log('id: %d, listId: %d', state[i].id, listId)
            }
            return list
        }
        case actionTypes.ADD_CARD: {
            console.log(action.payload.cardName, "action.payload.cardName")
            cardId += 1
            const newList = state.map((list) => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, {
                            cardName: action.payload.cardName,
                            id: cardId,
                        }],
                    }
                } else {
                    return list
                }
            })
            return newList
        }
        case actionTypes.DELETE_CARD: {
            const { listId, id } = action.payload
            return state.map((list) => {
                if (list.id === listId) {
                    return {
                        ...list,
                        cards: list.cards.filter((card) => card.id !== id),
                    }
                }
                return list
            })
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    lists: listsReducer,
})

export default rootReducer
