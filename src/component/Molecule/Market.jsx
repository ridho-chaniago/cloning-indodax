import { useEffect, useState } from 'react';
import Fav from './fav';
import { List } from '../Atom/List2';
import Number from '../Templates/Numbers';
import Price from './Price';
const Market = () => {
  const pairs = 'https://indodax.com/api/pairs';


  const [datacoin, setDatacoin] = useState([])
  useEffect(() => {
    fetch(pairs)
      .then(response => response.json())
      .then(data => {
        setDatacoin(data)
      })
      .catch(error => {
      })
  }, [])
  const [favorites, setFavorites] = useState([]);
  const handleFavoriteClick = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };
  return (
    <div >
      {datacoin.map((coin, index) => {
        return (
          <div key={index} className='flex'>

            <Fav filled={favorites[index]} onClick={() => handleFavoriteClick(index)} />
            <Number index={index} />
            <List width={'w-[150px] gap-2'}>
              <img src={coin.url_logo} alt="" /> {coin.description}
            </List>
            <List width={'w-[150px] capitalize'}>
              {coin.coingecko_id}
            </List>

          </div>
        )
      })}
    </div>

  )
}

export default Market