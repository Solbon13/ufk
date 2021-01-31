import newsReducer from "./newsReducer"
//action это объект у которого как минимум есть type и именно action объект dispatch-им в store
//reducer это чистая функция которая принимает action или state и если нужно применяет этот action к этому statу и возвращает измененный или не измененый state
//react библиотека которая отрисовывает UI
//reducer не принимает весь state, а только то что нужно reducer. action действия

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