import { useState } from "react"
import Button from "../Atom/Button"
const Dropdown = (props) => {

    const { children, list } = props
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div>
            <Button onClick={toggle}>{list}</Button>

            {open && (
                <div className="absolute bg-white mt-[13px] p-[5px] right-4 border shadow-lg">
                    <div className="flex flex-col">
                        {children}
                    </div>

                </div>
            )}
        </div>
    )
}
export default Dropdown