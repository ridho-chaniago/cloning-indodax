import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { DropMenuLeft, } from './DropMenuLeft';


const DropBarLeft = (props) => {
    const { classname, onClick } = props
    const [isOpen, setIsOpen] = useState(false)
    function toggle() {
        setIsOpen(!isOpen)
    }
    
    const className = isOpen ? 'hidden' : '';
    return (
        <>  
            <div className='fixed bg-white h-14 top-0 left-0 w-16 flex items-center justify-center'>
            <button onClick={toggle} className={` ${className}  border w-8 h-8  flex flex-col items-center justify-center rounded-full bg-white text-[#0084b6] border-[#0084b6] `}>


                <FontAwesomeIcon className='h-3 w-[10.29px]' icon={faBars} />
            </button>
            </div>
            {isOpen && (
                <div className='bg-white fixed top-0 left-0  h-full'>
                    <div className='flex items-center justify-center py-2 p-4 shadow-lg'>
                        <img className="mr-4 " src="https://indodax.com/v2/images/logo-indodax.png?20231108" alt="Indodax Logo" width="153" height="26" />
                        <button onClick={toggle} className={` ${classname} border w-8 h-8  flex flex-col items-center justify-center rounded-full bg-white text-[#0084b6] border-[#0084b6]`}>
                            <FontAwesomeIcon className='h-3 w-[10.29px]' icon={faBars} />
                        </button>
                    </div>
                    <DropMenuLeft />
                </div>
            )}
        </>
    )
}
export default DropBarLeft