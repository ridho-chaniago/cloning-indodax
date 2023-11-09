import Dropdown from "../Molecule/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSignInAlt, faMobileAndroidAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { ListLink } from "../Atom/ListLink";
import { List } from "../../assets/svg";
import 'tailwindcss/tailwind.css';




const DropMenu = () => {
    return (
        <Dropdown list={<span>Menu <FontAwesomeIcon icon={faCaretDown} /></span>}>

            <ListLink><List />Manajemen Alamat</ListLink>
            <ListLink><FontAwesomeIcon icon={faMobileAndroidAlt} />Mobile App</ListLink>
            <hr className="my-[5px]" />
            <ListLink><FontAwesomeIcon icon={faDesktop} />Mode Gelap</ListLink>
            <hr className="my-[5px]" />
            <ListLink>
                <FontAwesomeIcon icon={faSignInAlt} />Login
            </ListLink>


        </Dropdown>
    )
}
export default DropMenu