import {START_GAME} from './actions'

const initialState = {
    lang: 'en',
    gamePlay: false
}

export default (state = initialState, action) => {
    if (action.type === START_GAME) {
        return Object.assign({}, state, {
            gamePlay: true
        })
    }

    return state
}