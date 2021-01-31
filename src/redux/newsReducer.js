const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'

let initialState = {
    newsData: [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text1' },
        { id: 3, text: 'text1' },
        { id: 4, text: 'redux' },
    ],
    filterText: '1'
}
const newsReducer = (state = initialState, action) => {

    if (action.type === SET_FILTER_TEXT) {
        return {
            ...state,
            filterText: action.text
        }
    }
    else if (action.type === DO_FILTERING) {
        return {
            ...initialState,
            newsData: initialState.newsData.filter(newData => {
                return newData.text.toUpperCase().includes(state.filterText.toUpperCase())
            })
        }
    }

    return state
}

export const doFilterActionCreator = () => {
    return { type: DO_FILTERING }
}

export const changeFilterActionCreator = (text) => {
    return { type: SET_FILTER_TEXT, text: text }
}

export default newsReducer