const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'
const SET_NEWS = 'SET_NEWS'

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

    switch (action.type) {
        case SET_FILTER_TEXT:
            return {
                ...state,
                filterText: action.text
            }
        case DO_FILTERING:
            return {
                ...initialState,
                newsData: initialState.newsData.filter(newData => {
                    return newData.text.toUpperCase().includes(state.filterText.toUpperCase())
                })
            }
        case SET_NEWS:
            return {
                ...state,
                newsDate: action.newsData
            }
        default:
            return state
    }
}

export const doFilterActionCreator = () => {
    return { type: DO_FILTERING }
}

export const changeFilterActionCreator = (text) => {
    return { type: SET_FILTER_TEXT, text: text }
}

export const setNewsCreator = (newsData) => {
    return { type: SET_NEWS, newsData: newsData }
}

export default newsReducer