import { useEffect, useState } from 'react';
const NamaKoin = () => {
    const pairs = 'https://indodax.com/api/pairs';


    const [datacoin, setDatacoin] = useState([])
    useEffect(() => {
        fetch(pairs)
            .then(response => response.json())
            .then(data => {
                // const upperCaseData = data.map(item => item.toUpperCase());
                setDatacoin(data.slice(0, 290));


                
            })
            .catch(error => {console.log(error)
            })
    }, [])
    return (
        <div className='flex flex-col w-full' >
            <p className="border  h-10 flex items-center font-bold text-[13px] p-2">Nama Aset</p>
            {datacoin.map((coin, index) => {
                
                return (
                    <div key={index} className=' h-10 border flex items-center justify-start gap-2 p-2 text-[#636e7b] text-[13px]'>
                        {coin.coingecko_id}

                    </div>
                )
            })}
        </div>

    )
}

export default NamaKoin