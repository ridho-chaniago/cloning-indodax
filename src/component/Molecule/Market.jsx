import { useEffect, useState } from 'react';
const Market = () => {
  const pairs = 'https://indodax.com/api/pairs';


  const [datacoin, setDatacoin] = useState([])
  useEffect(() => {
    fetch(pairs)
      .then(response => response.json())
      .then(data => {
        setDatacoin(data.slice(0, 290));
      })
      .catch(error => {error
      })
  }, [])
  return (
    <div className='flex flex-col' >
      <p className="border w-40 h-10 flex items-center font-bold text-[13px] p-2">Market</p>
      {datacoin.map((coin, index) => {
        return (
          <div key={index} className='w-40 h-10 border flex items-center justify-start gap-2 p-2 text-[#636e7b] text-[13px]'>

            <img src={coin.url_logo} alt="" className='w-5 h-5' /> {coin.description}
          </div>
        )
      })}
    </div>

  )
}

export default Market