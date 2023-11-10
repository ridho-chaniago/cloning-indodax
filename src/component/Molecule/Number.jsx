

function Num() {
    const count = 290;
    const numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(
            <div key={i} className="border w-12 h-10 flex items-center justify-center">{i}</div>
        );
    }
    return (
        <>
            <div className="flex flex-col text-[#636e7b] text-[13px]">
                <p className="border w-12 h-10 flex items-center justify-center font-bold text-[13px]">No.</p>

                {numbers}
            </div>
        </>
    );
}
export default Num