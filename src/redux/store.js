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

    _setFilterText(text) {
        this._state.filterText = text
        this._rerenderEntireTree()
    },

    _doFiltering() {
        this._state.newsData = this._state.newsData.filter(newData => {
            console.log(newData.text.toUpperCase())
            console.log(this._state.filterText.toUpperCase())
            return newData.text.toUpperCase().includes(this._state.filterText.toUpperCase())
        })
        this._rerenderEntireTree()
    },

    dispatch(action) {
        //dispatch нужен для того чтобы было одна единственная функция доступная с наружи
        //минимум type для определения что именно сделать
        if (action.type === 'SET_FILTER_TEXT'){
            this._setFilterText(action.text)
        }
        else if (action.type === 'DO_FILTERING'){
            this._doFiltering()
        }
    }
}

window.store = store;

export default store