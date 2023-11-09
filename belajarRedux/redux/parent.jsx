import { useDispatch } from "react-redux"
import Child from "./child"
const Parent = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}> increment</button>
            <Child />
        </div >
    )
}
export default Parent