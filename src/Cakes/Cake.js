
import {useSelector, useDispatch} from 'react-redux'
const Cake = () => {
    const {numofCakes} = useSelector((state) => state.cake)
    const dispatch = useDispatch()
    
    const Buycake = () => {
        dispatch({type:'BUY_CAKE'})
    }
    const Returncake = ()=> {
        dispatch ({type:'RETURN_CAKE'})
    }
    console.log(numofCakes)
    return(
        <div>
            <h1>Cake Shop</h1>
            <h2>Num of cakes:{numofCakes}</h2>
            <button onClick = {Buycake}>Buy a Cake</button>
            <button onClick = {Returncake}>Return a Cake</button>
        </div>
    )
}
export default Cake;