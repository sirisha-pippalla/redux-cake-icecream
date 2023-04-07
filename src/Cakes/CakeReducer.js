const intialState = {
    numofCakes : 100
}

const CakereducerFn = (state=intialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':return{
            ...state,
            numofCakes:state.numofCakes -1
        };

        case 'RETURN_CAKE':return{
            ...state,
            numofCakes:state.numofCakes +1

        }
            
        default:return state
           
    }
}
export default CakereducerFn