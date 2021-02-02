import newsReducer from "./newsReducer"

let store = {
    _state: {
        newsData: [
            { id: 1, text: 'text1' },
            { id: 2, text: 'text1' },
            { id: 3, text: 'text1' },
            { id: 4, text: 'text1 redux' },
        ],
        filterText: '1'
    },
    _rerenderEntireTree() {
        console.log('plug')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        //dispatch нужен для того чтобы было одна единственная функция доступная с наружи
        //минимум type для определения что именно сделать
        //dispatch нужен для того чтобы было одна единственная функция доступная с наружи
        //минимум type для определения что именно сделать
        this._state = newsReducer(this._state, action)
        this._rerenderEntireTree()
    }
}

window.store = store;

export default store