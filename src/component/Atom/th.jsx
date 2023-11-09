

const Th = (props) => {
    const { children, width } = props
    return (

        <td className={`${width} h-[35px] border bg-white flex px-2 py-1 text-black`}>{children}</td>

    )
}
export default Th