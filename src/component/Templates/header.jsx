
import DropLang from "../organism/DropLang"
import DropMenu from "../organism/DropMenuRight"
import DropBarLeft from "../organism/DropBarLeft";
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from "../Atom/Button";
import { NavLeft } from "../organism/NavLeft";


const Header = () => {

    const [btcPrice, setBtcPrice] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr');
                const bitcoinPriceIdr = response.data.bitcoin.idr;
                console.log('Harga Bitcoin saat ini (dalam IDR):', bitcoinPriceIdr);
                const format = bitcoinPriceIdr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
                const slicedNumber = format.slice(0, 14)
                setBtcPrice(slicedNumber)
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };
        fetchData();
    }, []);

    console.log(typeof btcPrice)

    return (
        <header className="relative">
            <div className="bg-[#0084b6] p-[9px] px-[15px] w-full flex justify-between fixed z-10 ">

                <div className="bg-white  shadow-sm flex items-center h-full justify-center ">
                    <DropBarLeft></DropBarLeft>
                </div>
                <div className="flex gap-[5px]">
                    <Button width="text-[14px] text-white font-bold">1 BTC = {btcPrice}</Button>
                    <DropLang />
                    <DropMenu></DropMenu>
                </div>

            </div>
            <NavLeft />
        </header>
    )
}
export default Header