import Market from "../Molecule/Market"
import Price from "../Molecule/Price"
import Vol from "../Molecule/Vol24h"
import Th from "../Atom/th"

import Change from "../Molecule/Change24h"
// import MarketTest from "../Molecule/MarketTest"
const MainHome = () => {
    return (

        <div className="p-10">
            <thead className="border">
                <th className="flex p-0">
                    <Th width={'w-[45px]'} >Fav </Th>
                    <Th width={'w-[45px]'} >No. </Th>
                    <Th width={'w-[150px]'}>Market </Th>
                    <Th width={'w-[150px]'}>Nama Aset </Th>
                    <Th width={'w-[150px]'}>Harga Terakhir </Th>
                    <Th width={'w-[150px]'}>Vol 24h </Th>
                    <Th width={'w-[150px]'}>% Change</Th>
                </th>

            </thead>
            <div className="flex">

                {/* <div>
                    <MarketTest></MarketTest>
                </div> */}
                <div>
                    <Market></Market>
                </div>
                <div>
                    <Price />
                </div>
                <div>
                    <Vol />
                </div>
                <div>
                    <Change/>
                </div>

            </div>
        </div>
    )
}
export default MainHome