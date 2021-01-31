const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'

const setFilterText = (state, text) => {
    state.filterText = text
}

const doFiltering = (state) => {
    state.newsData = state.newsData.filter(newData => {
        return newData.text.toUpperCase().includes(state.filterText.toUpperCase())
    })
}

let initialState = {
    newsData: [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text1' },
        { id: 3, text: 'text1' },
        { id: 4, text: 'text1 redux' },
    ],
    filterText: '1'
}
const newsReducer = (state = initialState, action) => {

    if (action.type === SET_FILTER_TEXT){
        setFilterText(state, action.text)
        return state
    }
    else if (action.type === DO_FILTERING){
        doFiltering(state)
        return state
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