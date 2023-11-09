import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropBarLeftList = (props) => {
    const { icon, children, classname, classnamebtn,text } = props
    return (
        <button className={`${classnamebtn} w-full  py-3 pr-4 pl-5 border`}>
            <div className={` ${classname}  flex items-center justify-start rounded-full  text-[#0084b6]`}>
                <FontAwesomeIcon className='h-4 w-4' icon={icon} />{children}{text}
            </div>
        </button>
    )
}
export default DropBarLeftList