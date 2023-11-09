
import DropLang from "../organism/DropLang"
import DropMenu from "../organism/DropMenu"
import DropBarLeft from "../organism/DropBarLeft";
import DropBarLeftList from "../organism/DropBarLeftList";
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from "../Atom/Button";
import { faBarsProgress, faBarcode, faBarChart, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { Seru, Chart, Info } from "../../assets/svg";


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

    // function bar(){
    //     return(

    //     )
    // }

    return (
        <header>
            <div>
                <div className="bg-[#0084b6] p-[9px] px-[15px] w-full flex justify-end fixed z-10 ">
                    <div>
                        <button className="bg-white  shadow-sm p-[15px] flex items-center h-full justify-center absolute left-0 top-0">
                            <img className="mr-4 " src="https://indodax.com/v2/images/logo-indodax.png?20231108" alt="Indodax Logo" width="153" height="26" /> <DropBarLeft></DropBarLeft>
                        </button>
                        <div className="flex gap-[5px]">
                            <Button width="text-[14px] text-white font-bold">1 BTC = {btcPrice}</Button>
                            <DropLang />
                            <DropMenu></DropMenu>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" hidden flex border flex-col fixed h-full bg-white left-0 pt-16">

                <DropBarLeftList classnamebtn="bg-[#0084b6]" classname="bg-none" ><Chart classname="fill-white" /></DropBarLeftList>
                <DropBarLeftList ><Seru classname="w-3" /></DropBarLeftList>
                <DropBarLeftList icon={faFlagCheckered}></DropBarLeftList>
                <DropBarLeftList classname="font-extrabold ">i</DropBarLeftList>

            </div>
        </header>
    )
}
export default Header