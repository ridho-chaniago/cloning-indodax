export function ThTd({ title, width, children, classname }) {

    return (
        <div className={`${classname}`}>
            <p className={`${width}  border font-bold w-12 h-10 bg-white flex px-2 py-1 text-black`}>{title}</p>
            <div className="w-12 h-10 flex flex-col items-center justify-center">

                {children}
            </div>


        </div>
    )
}