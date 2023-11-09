import { useState, useEffect } from "react";
import { List } from "../Atom/List2";

const Price = () => {
    const summaries = 'https://indodax.com/api/summaries/';
    const [price, setPrice] = useState([])
    const [lastPrice, setLastPrice] = useState([]);
    useEffect(() => {
        fetch(summaries)
            .then(response => response.json())
            .then(dataPrice => {
                const tickers = dataPrice.tickers || {}; // Periksa apakah properti tickers tersedia
                const lastPrice = Object.values(tickers).map(ticker => ticker.last);
                setLastPrice(lastPrice);
                console.log(lastPrice)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    // console.log((price.tickers).map(ticker => ticker.last))
    // const realPrice = Object.values(price.tickers).map(ticker => ticker.last)
    return (
        <>
            <div>
                {lastPrice.map((dataPrice, index) => (
                    <List width={'w-[150px] flex justify-end'} key={index}>
                        {Number(dataPrice).toLocaleString('id')}
                    </List>
                ))}
            </div>
        </>
    )
}
export default Price