import { useState, useEffect } from "react";

const Price = () => {
    const summaries = 'https://indodax.com/api/summaries/';
    const [lastPrice, setLastPrice] = useState([]);
    useEffect(() => {
        fetch(summaries)
            .then(response => response.json())
            .then(dataPrice => {
                const tickers = dataPrice.tickers || {};
                const lastPrice = Object.values(tickers).map(ticker => ticker.last);
                
                setLastPrice(lastPrice.slice(0,290));
                console.log(lastPrice)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div>
            <p className="border  h-10 flex items-center font-bold text-[13px] p-2">Harga Terakhir</p>
                {lastPrice.map((dataPrice, index) => (
                   <div key={index} className=' h-10 w-40 border flex items-center justify-end gap-2 p-2 text-[#636e7b] text-[13px]'>
                        {Number(dataPrice).toLocaleString('id')}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Price