const Button =(props)=>{
    const {children, onClick,width}=props
    return(
        <button onClick={onClick} className={`${width} rounded-full px-[12px] text-sm py-[7px] text-[rgba(255,255,255,.75)] bg-[#0000001A] hover:bg-[rgba(0,0,0,.3)]`}>
                {children}
                
            </button>
    
)
}
export default Button