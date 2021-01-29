let state = {
    newsData: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text1'},
        {id: 3, text: 'text1'},
        {id: 4, text: 'text1 redux'},
      ]
}

export let filteringTheList = (text) => {
    state.newsData = state.newsData.filter((el) => el === 'text1')
}

export default state