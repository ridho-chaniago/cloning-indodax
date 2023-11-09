import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { List } from '../Atom/List2';



const Fav = (props) => {
    const { onClick, filled } = props



    return (
        <>

            <List width={'w-[45px]'} onClick={onClick}>
                {filled ? (
                    <RiStarFill className='m-auto' style={{ color: '#f0ad4e' }} />
                ) : (
                    <RiStarLine className='m-auto fill-[#f0ad4e]' />
                )}
            </List >
        </>

    )

}
export default Fav