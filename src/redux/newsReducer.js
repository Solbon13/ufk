const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
const DO_FILTERING = 'DO_FILTERING'
const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_NEWS_COUNT = 'SET_TOTAL_NEWS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    newsData: [],
    filterText: '1',
    //paginator
    pageSize: 50,
    totalNewsCount: 5,
    currentPage: 1,
    isFetching: true
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
                ...state,
                newsData: state.newsData.filter(newData => {
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const doFilterAction = () => {
    return { type: DO_FILTERING }
}

export const changeFilterAction = (text) => {
    return { type: SET_FILTER_TEXT, text: text }
}

export const setNews = (newsData) => {
    return { type: SET_NEWS, newsData: newsData }
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}

export const setTotalNewsCount = (totalNewsCount) => {
    return { type: SET_TOTAL_NEWS_COUNT, totalNewsCount: totalNewsCount }
}
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
}

export default newsReducer