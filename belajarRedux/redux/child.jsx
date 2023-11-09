import { useSelectCalculate } from "./reducers/calculateReducer"

const Child = () => {
    const { number } = useSelectCalculate()
    console.log(number)
   

}

export default Child