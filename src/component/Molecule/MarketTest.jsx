import React, { useState, useEffect } from "react";
import { RiStarFill, RiStarLine } from 'react-icons/ri';

const MarketTest = () => {
    const pairs = 'https://indodax.com/api/pairs';
    const [datacoin, setDatacoin] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [id, setId] = useState({})

    useEffect(() => {
        fetch(pairs)
            .then(response => response.json())
            .then(data => {
                setDatacoin(data);
                console.log(data);
                setId(data.id)

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleFavoriteClick = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };

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
                console.log(typeof dataPrice.prices_24h)
                const a=dataPrice.prices_24h
                console.log(a)
                const b=Object.values(a)
                console.log(b)
                // console.log(dataPrice)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    console.log(id)
    return (
        <div>
            <table>
                <tbody>
                    {datacoin.map((coin, index) => (
                        <tr key={index}>
                            <td><RiStarFill className='m-auto' style={{ color: '#f0ad4e' }} />
                            </td>
                            <td>{index + 1}</td>
                            <td className="flex gap-2 ">< img className="w-[20px] h-[20px]" src={coin.url_logo} alt="" />{coin.price_precision == coin.pricescale ? (coin.description) : coin.cmc_id
                            }</td>
                            <td>{coin.traded_currency}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarketTest;
