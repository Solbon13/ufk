let store = {
    _state: {
        newsData: [
            {id: 1, text: 'text1'},
            {id: 2, text: 'text1'},
            {id: 3, text: 'text1'},
            {id: 4, text: 'text1 redux'},
          ],
          filterText: '1'
    },
    getState(){
        return this._state
    },
    _rerenderEntireTree() {
        console.log('plug')
    },
    setFilterText(text) {
        this._state.filterText = text
        this._rerenderEntireTree()
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer
    }
}

window.store = store;

export default store