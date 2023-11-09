export function List() {
    return (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr10">
            <path d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z" fill="#4A4A4A"></path>
            <path d="M7.33333 9.33333H2.66667V8H7.33333V9.33333ZM9.33333 6.66667H2.66667V5.33333H9.33333V6.66667ZM9.33333 4H2.66667V2.66667H9.33333V4Z" fill="#4A4A4A"></path>
        </svg>
    )
}

export function Seru(props) {
    const {classname}=props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`fill-[#0084B6] ${classname} dark:fill-white`}>
            <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
        </svg>
    )
}
export function Chart(props) {
    const {classname}=props
    return (
        <svg className={`fill-[#0084B6] ${classname} dark:fill-white w-4 h-4`} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23,22H3a1,1,0,0,1-1-1V1A1,1,0,0,0,0,1V21a3,3,0,0,0,3,3H23a1,1,0,0,0,0-2Z"/><path d="M15,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,15,20Z"/><path d="M7,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,7,20Z"/><path d="M19,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,19,20Z"/><path d="M11,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,11,20Z"/></svg>
    )
}
export function Info(props) {
    const {classname}=props
    return (
        <svg className={`fill-[#0084B6] ${classname} dark:fill-white w-4`} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m11,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3,19.5v-12.5c0-1.93-1.57-3.5-3.5-3.5h-3.5v3h3.5c.276,0,.5.224.5.5v12.5h-4v3h11v-3h-4Z"/></svg>
    )
}