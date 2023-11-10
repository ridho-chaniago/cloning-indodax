import Change from "../Molecule/Change24h"
import Market from "../Molecule/Market"
import NamaKoin from "../Molecule/NamaKoin"
import Num from "../Molecule/Number"
import Price from "../Molecule/Price"
import Vol from "../Molecule/Vol24h"
import Fav from "../Molecule/fav"

const MarketHome = () => {
    return (
        <div className="flex">
            <Fav />
            <Num />
            <Market/>
            <NamaKoin/>
            <Price/>
            <Vol/>
            <Change/>
        </div>
    )
}
export default MarketHome