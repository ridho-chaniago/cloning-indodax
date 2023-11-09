export const List = (props) => {
    const { children, onClick, width } = props
    return (
        <td className={`${width} h-[35px] border bg-white flex text-[13px] px-2 py-2 text-[#636e7b] m-0 font-poppins`} onClick={onClick}>

            {children}
        </td>
    )

}