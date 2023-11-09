import { useState, useEffect } from "react";
import { List } from "../Atom/List2";

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
                setLastVol(lastVol);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <div>
                {lastVol.map((dataVol, index) => (
                    <List width={'w-[150px] flex justify-end'} key={index}>
                        {formatCurrency(parseFloat(dataVol))}
                    </List>
                ))}
            </div>
        </>
    )
}

export default Vol;
