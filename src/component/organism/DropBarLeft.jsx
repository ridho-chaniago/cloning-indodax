import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';


const DropBarLeft =({classname})=>{
    return(
      
        <button className={` ${classname} border w-8 h-8  flex items-center justify-center rounded-full bg-white text-[#0084b6] border-[#0084b6]`}>
            <FontAwesomeIcon className='h-3 w-[10.29px]' icon={faBars} />
        </button>

    )
}
export default DropBarLeft