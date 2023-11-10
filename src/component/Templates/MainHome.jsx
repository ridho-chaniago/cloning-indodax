import Market from "../Molecule/Market"
import Price from "../Molecule/Price"
import Vol from "../Molecule/Vol24h"
import Th from "../Atom/th"
import { Btnmarket } from "../Atom/Button"

import Change from "../Molecule/Change24h"
import Carousel from "./carousel"
import MarketHome from "../organism/MarketHome"
// import MarketTest from "../Molecule/MarketTest"
const MainHome = () => {
    return (

        <>
            <div className="bg-[#d9edf7] pt-20 pl-20 text-[#31708f] text-[13px] p-4 " >
                <span>Silakan <a className="text-[#0084b6]" href="https://indodax.com/register">Register</a> atau <a className=" text-[#0084b6]" href="https://indodax.com/login">Login</a> untuk membeli atau menjual aset.</span>
                <button aria-hidden="true" data-dismiss="alert" type="button">×</button>
            </div>
            <Carousel />
            <div className="p-20 py-12 w-full ">
                <div className="border-[#0084b6] border-[2px] bg-blue rounded-t-md ">
                    <div className="bg-[#0084b6] overflow-x-scroll whitespace-nowrap flex gap-5 pl-36 justify-around rounded-t-[5px] ">

                        <Btnmarket text="Favorit"></Btnmarket>
                        <Btnmarket classname='bg-white rounded-t-md text-[#0084b6]' text="Semua ">Semua</Btnmarket>
                        <Btnmarket text="IDR Market ">IDR Market</Btnmarket>
                        <Btnmarket text="USDT Market ">USDT Market</Btnmarket>
                        <Btnmarket text="Stable Coin ">Stable Coin</Btnmarket>
                        <Btnmarket text="DeFi ">DeFi</Btnmarket>
                        <Btnmarket text="NFT/Gaming ">NFT/Gaming</Btnmarket>
                        <Btnmarket text="Metaverse ">Metaverse</Btnmarket>
                        <Btnmarket text="Layer 1&2 ">Layer 1&2</Btnmarket>
                        <Btnmarket text="Innovation ">Innovation</Btnmarket>
                        <Btnmarket text="Koin Baru ">Koin Baru</Btnmarket>
                    </div>
                    <div className="px-[15px] w-full">
                       <MarketHome/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainHome