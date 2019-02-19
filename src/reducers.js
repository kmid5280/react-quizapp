import {START_GAME} from './actions'

const initialState = {
    lang: 'en',
    gamePlay: false
}

export const Quiz = (state = initialState, action) => {
    if (action.type === START_GAME) {
        return Object.assign({}, state, {
            gamePlay: true
        })
    }

    return state
}