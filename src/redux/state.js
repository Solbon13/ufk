let state = {
    newsData: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text1'},
        {id: 3, text: 'text1'},
        {id: 4, text: 'text1 redux'},
      ],
      filterText: '1'
}

export const updateFilterText = (text) => {
    state.filterText = text
}

Window.state = state;

export default state