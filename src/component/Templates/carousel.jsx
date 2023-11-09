import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
      'https://assets.indodax.com/images/banner/e0c1e3f7ff984239641e52eeaca01e4b.jpg',
      'https://assets.indodax.com/images/banner/eab71e1785c5a0713c313bd39eccaa84.jpg',
      'https://assets.indodax.com/images/banner/2096d26e90f2a7eeb162c8940a16a92f.png',
      'https://assets.indodax.com/images/banner/fc24cbe9edcd730f5c5f9481883f3496.png',
      'https://assets.indodax.com/images/banner/3e917d743cf2aa7807918bfc5f5b8806.png',
      'https://assets.indodax.com/images/banner/f9e44e13b86528a80d141691967cf52b.jpg',
    'https://assets.indodax.com/images/banner/abe0e847bc1087a9d9ae483f092b1cc6.jpg',
    'https://assets.indodax.com/images/banner/1691d450eda661711ab57268514007fa.jpg',
      'https://assets.indodax.com/images/banner/5712f6f704ade6b62c143012a4cfbe4b.jpg',
      'https://assets.indodax.com/images/banner/7fc870084b2162eb29be785045dba076.jpg',
      'https://assets.indodax.com/images/banner/49d82a50b0d514698e122cb69aa9ab1e.jpg',
      'https://assets.indodax.com/images/banner/36be5cefdbbfd89a112c4fafa377cda7.jpg',
    'https://assets.indodax.com/images/banner/2e424521c6a8f35c272cdc02d7240e0a.jpg',
    'https://assets.indodax.com/images/banner/936c90347f24c8af8b756489dfff967e.jpg',
      'https://assets.indodax.com/images/banner/6bee2dc4b64c6d9a4f7f6238b311db0b.jpg',
      'https://assets.indodax.com/images/banner/401e243b984a0cb576d3a45482f7d5de.jpg',
      'https://assets.indodax.com/images/banner/93b3dde4dbfacf563b62e715ff312bac.jpg',
      'https://assets.indodax.com/images/banner/dfc77d3a70baa8142884f515a5188b9d.png',
      'https://assets.indodax.com/images/banner/a57431261932c18dc4806f271436b3b0.jpg',
      'https://assets.indodax.com/images/banner/eab71e1785c5a0713c313bd39eccaa84.jpg',
      'https://assets.indodax.com/images/banner/2096d26e90f2a7eeb162c8940a16a92f.png',
      'https://assets.indodax.com/images/banner/fc24cbe9edcd730f5c5f9481883f3496.png',
      'https://assets.indodax.com/images/banner/3e917d743cf2aa7807918bfc5f5b8806.png',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevSlide = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="flex items-center justify-center bg-[#f5f5f5] p-5 -z-20">
            <div className="relative w-3/4 h-[125px] overflow-hidden">
                <FaChevronLeft onClick={goToPrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer -z-10" />
                <FaChevronRight onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer -z-10" />
                <div className="w-full h-full flex  gap-5 -z-10" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image}
                            alt={`carousel-${index}`}
                            className="rounded-lg flex gap-5 -z-10"
                            style={{ imageRendering: 'auto' }}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;