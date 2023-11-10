import { useState, useEffect } from "react";

function formatCurrency(amount) {
    if (typeof amount !== 'number') {
        return 'Invalid amount';
    }
    if (amount >= 1e9) {
        return (amount / 1e9).toFixed(1) + 'bn IDR';
    }
    if (amount >= 1e6) {
        return (amount / 1e6).toFixed(1) + 'mn IDR';
    }
    return parseFloat(amount).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' IDR';
}

const Vol = () => {
    const volume = 'https://indodax.com/api/summaries/';
    const [lastVol, setLastVol] = useState([]);

    useEffect(() => {
        fetch(volume)
            .then(response => response.json())
            .then(dataVol => {
                const tickers = dataVol.tickers || {}; // Periksa apakah properti tickers tersedia
                const lastVol = Object.values(tickers).map(ticker => ticker.vol_idr);
                setLastVol(lastVol.slice(0,290));
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <div>
            <p className="border  h-10 flex items-center font-bold text-[13px] p-2">Vol24h</p>
                {lastVol.map((dataVol, index) => (
                    <div key={index} className=' h-10 w-40 border flex items-center justify-end gap-2 p-2 text-[#636e7b] text-[13px]'>
                        {formatCurrency(parseFloat(dataVol))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Vol;
