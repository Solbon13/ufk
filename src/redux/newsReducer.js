const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'
const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_NEWS_COUNT = 'SET_TOTAL_NEWS_COUNT'

let initialState = {
    newsData: [
        { id: 1, name: 'text1' },
        { id: 2, name: 'text1' },
        { id: 3, name: 'text1' },
        { id: 4, name: 'redux' },
    ],
    filterText: '1',
    //paginator
    pageSize: 2,
    totalNewsCount: 5,
    currentPage: 1
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
                    return newData.name.toUpperCase().includes(state.filterText.toUpperCase())
                })
            }
        case SET_NEWS:
            return {
                ...state,
                newsData: action.newsData
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_NEWS_COUNT:
            return {
                ...state,
                totalNewsCount: action.totalNewsCount
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

export const setCurrentPageCreator = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}

export const setTotalNewsCountCreator = (totalNewsCount) => {
    return { type: SET_TOTAL_NEWS_COUNT, totalNewsCount: totalNewsCount }
}

export default newsReducer