const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'help me find peach' },
        { id: '2', title: 'collect all the stars', content: 'collect all the starts' },
        { id: '3', title: 'egg hunt with yoshi', content: 'egg hunt with yoshi' }
    ]

}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;