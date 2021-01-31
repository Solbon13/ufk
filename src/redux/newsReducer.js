const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'

export const doFilterActionCreator = () => {
    return {type: DO_FILTERING}
}

export const changeFilterActionCreator = (text) => {
    return {type: SET_FILTER_TEXT, text: text}
}

const setFilterText = (state, text) => {
    state.filterText = text
}

const doFiltering = (state) => {
    state.newsData = state.newsData.filter(newData => {
        console.log(newData.text.toUpperCase())
        console.log(state.filterText.toUpperCase())
        return newData.text.toUpperCase().includes(state.filterText.toUpperCase())
    })
}

const newsReducer = (state, action) => {

    if (action.type === SET_FILTER_TEXT){
        setFilterText(state, action.text)
    }
    else if (action.type === DO_FILTERING){
        doFiltering(state)
    }

    return state
}

export default newsReducer