
import { List } from '../Atom/List2';

const Number = (props) => {

    return (
        <>
            <List width={'w-[45px] flex justify-center'}>
                {props.index + 1}
            </List>
        </>
    )
}
export default Number