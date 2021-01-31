let state = {
    newsData: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text1'},
        {id: 3, text: 'text1'},
        {id: 4, text: 'text1 redux'},
      ],
      filterText: '1'
}

let rerenderEntireTree = () => {
    console.log('plug')
}

export const updateFilterText = (text) => {
    state.filterText = text
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

Window.state = state;

export default state