export const ListLink=(props)=>{
    const {children,classname}=props
    return(
        <a className={`${classname} py-[8px] px-[15px] flex text-xs gap-[10px] items-center text-[#555555]`} href="/home">{children}</a>
            
    )
}