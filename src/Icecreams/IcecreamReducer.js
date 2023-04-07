const icecreaminitialState = {
    numOfIcecreams : 150
}

const icecreamReducerfn = (state=icecreaminitialState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':return{
                ...state,
                numOfIcecreams:state.numOfIcecreams-1
            };
            case 'RETURN_ICECREAM':return{
                ...state,
                numOfIcecreams:state.numOfIcecreams+1
            } 

        
        default : return state
    }
}

export default icecreamReducerfn 