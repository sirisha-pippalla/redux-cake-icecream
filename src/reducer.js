const count = 0;

const reducer = (state = count, action) => {
    const { type, payload } = action  //action--2values:type, payload

    //dispatch actions to store for this we have to check
    switch (type) {
        case "INCREMENT":
            return count + 1;
        case "DECREMENT":
            return count - 1;
        default: return count;
    }

    return {

    }
}


export default reducer;