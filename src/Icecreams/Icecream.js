import {useSelector, useDispatch} from 'react-redux';

const Icecream = () => {
    const {numOfIcecreams} = useSelector((state) => state.iceCream)
    const dispatch = useDispatch()
    const BuyIcecreams = () => {
        dispatch({type:'BUY_ICECREAM'})
    }
    const ReturnIcecream = () => {
        dispatch({type:'RETURN_ICECREAM'})
    }
    console.log('numOfIcecreams', numOfIcecreams)
    return(
        <div>
            <h1>Icecream Shop</h1>
            <h2>Num of Icecreams : {numOfIcecreams}</h2>
            <button onClick = {BuyIcecreams}>Buy Icecream</button>
            <button onClick = {ReturnIcecream}>Return Icecream</button>
        </div>
    )
}

export default Icecream;