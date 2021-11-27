let initialState = {
    authors: []
}

const author = (state = initialState, {type, payload}) => {
    switch (type) {
        case "ADD_AUTHORS":
            return {
                authors: payload
            } 
        default: return state
    }
}

export const addAuthors = (authors) => {
    return {
        type:"ADD_AUTHORS",
        payload: authors,
        }
}

export default author;