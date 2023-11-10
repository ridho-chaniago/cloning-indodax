import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { useState } from 'react';
import { ThTd } from '../Atom/ThTd';

const Fav = () => {
    const favCount = 290; // Jumlah bintang yang ingin ditampilkan
    const fav = [];


    const [favorites, setFavorites] = useState([]);
    const handleFavoriteClick = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };
    
    for (let index = 0; index < favCount; index++) {
        fav.push(
            <div key={index} onClick={() => handleFavoriteClick(index)} className="border  w-12 h-10 flex items-center justify-center">
                {favorites[index] ? (
                    <RiStarFill className='m-auto' style={{ color: '#f0ad4e' }} />
                ) : (
                    <RiStarLine className='m-auto fill-[#f0ad4e]' />
                )}
            </div>
        );
    }


    return (
        <>
            <div className="flex flex-col ">
            <p className="border w-12 h-10 flex items-center justify-center font-bold text-[13px]">Fav</p>

                {fav}
            </div>
        </>
    );
};

export default Fav;